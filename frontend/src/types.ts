//*********************************************** *//
//loading animationの色
export const LoadingBackgroundColor = 'rgb(1, 69, 255)';

//*********************************************** *//
//Boxの色
export type BoxColorResult = {
    base: string;
    hover: string;
};

export const storyBoxColor = (colorIndex: number): BoxColorResult => {
    switch (colorIndex % 4) {
        case 1:
            return { base: 'rgba(0, 212, 138, 0.721)', hover: 'rgb(0, 199, 130)' };
        case 2:
            return { base: 'rgba(218, 70, 248, 0.721)', hover: 'rgb(218, 70, 248)' };
        case 3:
            return { base: 'rgba(0, 170, 212, 0.721)', hover: 'rgb(0, 170, 212)' };
        case 0:
            return { base: 'rgba(242, 158, 1, 0.721)', hover: 'rgb(242, 158, 1)' };
        default:
            throw new Error('存在しない色');
    }
};
