import { render, screen } from '@testing-library/react';
import { GenerateImg } from '@/app/index';
import { modelType } from '@/constants/api';
import userEvent from '@testing-library/user-event';

//*Web APIのURLを書く
const setCorrectUrl = 'http://127.0.0.1:8787';

describe('GenerateImg Component Test', () => {
    it('Render Component Test', () => {
        render(<GenerateImg />);
        const sample: HTMLElement = screen.getByText('Let`s Try');
        expect(sample).toBeTruthy();
    });

    it.each(modelType)(`Model Name Change Test: %s`, async (model) => {
        render(<GenerateImg />);
        const modelSelectButton: HTMLElement = screen.getByTestId(`${model}-button`);
        await userEvent.click(modelSelectButton);
        const modelName: HTMLElement[] = screen.getAllByText(`${model}`);
        const modelNameLength: number = modelName.length;
        expect(modelNameLength === 2).toBeTruthy();
    });

    it.each(modelType)(`Set Correct API URL Test: %s`, async (model) => {
        const testUrl: string = process.env.NEXT_PUBLIC_API_URL + '/' + model + '/' + 'hello';
        const correctUrl: string = setCorrectUrl + '/' + model + '/hello';
        expect(testUrl === correctUrl).toBeTruthy();
    });

    it(`Prompt Empty Test`, async () => {
        render(<GenerateImg />);
        const generateImgButton: HTMLElement = screen.getByTestId('generateimg-button');
        await userEvent.click(generateImgButton);
        const promptValidation: HTMLElement = screen.getByTestId('prompt-validation');
        expect(promptValidation).toBeTruthy();
    });

    it(`Waiting Animation Test`, async () => {
        render(<GenerateImg />);
        const InputPromptElement: HTMLElement = screen.getByTestId('input-prompt');
        await userEvent.type(InputPromptElement, 'hello');
        const generateImgButton: HTMLElement = screen.getByTestId('generateimg-button');
        await userEvent.click(generateImgButton);
        const waitingAnimationMsg: HTMLElement = screen.getByTestId('waiting-animation');
        expect(waitingAnimationMsg).toBeTruthy();
    });
});
