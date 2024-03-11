import styled, { keyframes } from 'styled-components';

const LoadingText = styled.p`
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

const Circle = styled.div<{ backgroundColor: string }>`
    height: 300px;
    width: 300px;
    border: 3px solid #fff;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor};
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

const Loading = (props: { backgroundColor: string }) => {
    return (
        <>
            <LoadingText data-testid="waiting-animation">Generate Image ...</LoadingText>
            <CircleBox>
                <Circle1 backgroundColor={props.backgroundColor}></Circle1>
                <Circle2 backgroundColor={props.backgroundColor}></Circle2>
                <Circle3 backgroundColor={props.backgroundColor}></Circle3>
                <Circle4 backgroundColor={props.backgroundColor}></Circle4>
            </CircleBox>
        </>
    );
};

export default Loading;
