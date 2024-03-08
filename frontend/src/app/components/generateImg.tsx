import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { testApi, performanceApi, modelType } from '@/api';

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

const ModelButton = styled.button`
    margin: 5px;
    height: 160px;
    width: 160px;
    list-style: none;
    color: rgb(255, 255, 255);
    font-size: 20px;
    cursor: pointer;
    border: none;
    &:nth-of-type(4n + 1) {
        background-color: rgba(0, 212, 138, 0.721);
        &:hover {
            background-color: rgb(0, 199, 130);
        }
    }
    &:nth-of-type(4n + 2) {
        background-color: rgba(218, 70, 248, 0.721);
        &:hover {
            background-color: rgb(218, 70, 248);
        }
    }
    &:nth-of-type(4n + 3) {
        background-color: rgba(0, 170, 212, 0.721);
        &:hover {
            background-color: rgb(0, 170, 212);
        }
    }
    &:nth-of-type(4n) {
        background-color: rgba(242, 158, 1, 0.721);
        &:hover {
            background-color: rgb(242, 158, 1);
        }
    }
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

const Loading = styled.p`
    margin: 30px 0px 0px;
    font-size: 20px;
    text-align: center;
    color: rgb(255, 255, 255);
`;

const Gigantization = keyframes`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`;

const CircleBox = styled.div`
    height: 300px;
    width: 300px;
    margin: 20px auto 20px;
    position: relative;
`;

const Circle = styled.div`
    height: 300px;
    width: 300px;
    border: 3px solid #fff;
    border-radius: 50%;
    background-color: rgb(1, 69, 255);
    animation-duration: 8s;
    animation-iteration-count: infinite;
    position: absolute;
    animation-name: ${Gigantization};
    opacity: 0;
`;

const Circle1 = styled(Circle)`
    animation-delay: 0s;
`;
const Circle2 = styled(Circle)`
    animation-delay: 2s;
`;
const Circle3 = styled(Circle)`
    animation-delay: 4s;
`;
const Circle4 = styled(Circle)`
    animation-delay: 6s;
`;

const GenerateImg = () => {
    const inputPrompt = useRef<HTMLInputElement>(null);
    const [model, setModel] = useState<string>(modelType[0]);
    const [prompt, setPrompt] = useState<string | undefined>();
    const [img, setImg] = useState<string>('');

    const getImg = async (url: string): Promise<void> => {
        try {
            const response = await fetch(url);
            const resJson = await response.json();
            setImg(resJson.url[0]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleModel = (chooseModel: number) => {
        setModel(modelType[chooseModel]);
    };

    const handleGetImg = (e: React.FormEvent) => {
        e.preventDefault();
        const inputValue: string | undefined = inputPrompt.current?.value;
        setPrompt(inputValue);
        if (typeof inputValue == 'string') {
            getImg(testApi + '/' + model + '/' + inputValue);
        }
    };
    return (
        <Box>
            <Title>Let`s Try</Title>
            <Label>Choose Model</Label>
            <ChosedModel data-testid="model-name">{model}</ChosedModel>
            <ModelDiv>
                {modelType.map((el, i) => (
                    <ModelButton data-testid={`${el}-button`} key={i} onClick={() => handleModel(i)}>
                        {el}
                    </ModelButton>
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
                <>
                    <Label>Prompt: {prompt}</Label>
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
                            <Loading data-testid="waiting-animation">Generate Image ...</Loading>
                            <CircleBox>
                                <Circle1></Circle1>
                                <Circle2></Circle2>
                                <Circle3></Circle3>
                                <Circle4></Circle4>
                            </CircleBox>
                        </>
                    )}
                </>
            ) : (
                <VaridError data-testid="prompt-validation">プロンプトを入力して下さい。</VaridError>
            )}
        </Box>
    );
};

export default GenerateImg;
