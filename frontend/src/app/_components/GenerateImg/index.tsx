import { useState, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { modelType } from '@/constants/api';
import { Loading, ModelButton } from '@/app/index';
import { LoadingBackgroundColor } from '@/types';
import { storyBoxColor } from '@/types';

const Box = styled.div`
    width: 100%;
    margin: 100px auto 0px;
    max-width: 800px;
`;

const Title = styled.h2`
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 48px;
    margin-bottom: 30px;
`;

const InputPrompt = styled.input`
    margin: 30px auto 0px;
    outline: none;
    border: none;
    font-size: 35px;
    color: rgb(255, 255, 255);
    background-color: #272727;
    text-align: center;
    width: 100%;
    height: 50px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

const Label = styled.p`
    text-align: center;
    color: rgb(255, 255, 255, 0.7);
    font-size: 25px;
    margin: 0px 0px 10px 0px;
`;

const ModelDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px auto 30px;
`;

const ChosedModel = styled.h2`
    margin: 20px auto 20px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 35px;
`;

const VaridError = styled.p`
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 20px;
`;

const PromptForm = styled.form``;

const GenerateImgButton = styled.button`
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    height: 40px;
    width: 200px;
    border: none;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    background-color: rgba(1, 69, 255, 0.721);
    display: block;
    margin: 30px auto;
    &:hover {
        background-color: rgb(1, 69, 255);
    }
`;

const GenerateImg = () => {
    const inputPrompt = useRef<HTMLInputElement>(null);
    const [model, setModel] = useState<string>(modelType[0]);
    const [prompt, setPrompt] = useState<string | undefined>();
    const [img, setImg] = useState<string>('');
    const [resultPrompt, setResultPrompt] = useState<string>('');

    //エラーメッセージ
    const errorMsg: string = 'One or more errors have occurred！';

    const getImg = async (url: string): Promise<void> => {
        //実際のプロンプトと画像のURLを取得する
        try {
            setResultPrompt('');
            setImg('');
            const response = await fetch(url);
            const resJson = await response.json();
            setResultPrompt(resJson.prompt[0]);
            setImg(resJson.url[0]);
        } catch (err) {
            console.error(err);
            setResultPrompt(errorMsg);
            setImg('error');
        }
    };

    const handleModel = (chooseModel: number): void => {
        setModel(modelType[chooseModel]);
    };

    const handleGetImg = (e: React.FormEvent) => {
        e.preventDefault();
        const inputValue: string | undefined = inputPrompt.current?.value;
        setPrompt(inputValue);
        if (typeof inputValue == 'string') {
            getImg(process.env.NEXT_PUBLIC_API_URL + '/' + model + '/' + inputValue);
        }
    };
    return (
        <Box>
            <Title>Let`s Try</Title>
            <Label>Choose Model</Label>
            <ChosedModel data-testid="model-name">{model}</ChosedModel>
            <ModelDiv>
                {modelType.map((modelName, index) => (
                    <ModelButton
                        key={index}
                        modelName={modelName}
                        index={index}
                        handleModel={handleModel}
                        storyBoxColor={storyBoxColor}
                    />
                ))}
            </ModelDiv>
            <PromptForm>
                <Label>prompt</Label>
                <InputPrompt
                    ref={inputPrompt}
                    type="text"
                    placeholder="Input Prompt"
                    autoFocus
                    data-testid="input-prompt"
                />
                <br />
                <GenerateImgButton onClick={handleGetImg} data-testid="generateimg-button">
                    Generate Image
                </GenerateImgButton>
            </PromptForm>
            {typeof prompt === 'undefined' ? (
                <></>
            ) : prompt !== '' ? (
                resultPrompt !== errorMsg && img !== 'error' ? (
                    <>
                        <Label>Prompt: {resultPrompt}</Label>
                        {img !== '' ? (
                            <Image
                                src={img}
                                width={1024}
                                height={1024}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt={'Generated Image'}
                            />
                        ) : (
                            <>
                                <Loading backgroundColor={LoadingBackgroundColor} />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <Label>{resultPrompt}</Label>
                    </>
                )
            ) : (
                <VaridError data-testid="prompt-validation">プロンプトを入力して下さい。</VaridError>
            )}
        </Box>
    );
};

export default GenerateImg;
