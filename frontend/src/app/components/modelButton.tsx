import styled from 'styled-components';
import { BoxColorResult } from '@/types';

const StyledModelButton = styled.button<{ color: BoxColorResult }>`
    margin: 5px;
    height: 160px;
    width: 160px;
    list-style: none;
    color: rgb(255, 255, 255);
    font-size: 20px;
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.color.base};
    &:hover {
        background-color: ${(props) => props.color.hover};
    }
`;

const ModelButton = (props: {
    modelName: string;
    index: number;
    handleModel: (i: number) => void;
    storyBoxColor: (i: number) => BoxColorResult;
}) => {
    return (
        <>
            <StyledModelButton
                data-testid={`${props.modelName}-button`}
                onClick={() => props.handleModel(props.index)}
                color={props.storyBoxColor(props.index)}
            >
                {props.modelName}
            </StyledModelButton>
        </>
    );
};

export default ModelButton;
