import styled from 'styled-components';
import Image from 'next/image';

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

const Content = styled.p`
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 20px;
`;

const ImageBox = styled.div`
    margin: 0px 0px 80px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const About = () => {
    return (
        <Box>
            <ImageBox>
                <Image
                    src={'/logo.webp'}
                    width={200}
                    height={200}
                    alt={'logo'}
                    placeholder={'empty'}
                    loading={'lazy'}
                />
            </ImageBox>
            <Title>About</Title>
            <Content>
                stableDiffusion4R is an R interface to ‘Stable Diffusion’ APIs, and additional APIs, for AI-driven
                creative image transformations. This page guides you in using the stableDiffusion4R’s API.
            </Content>
        </Box>
    );
};

export default About;
