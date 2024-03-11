import styled from 'styled-components';

const StyleTop = styled.div`
    background-image: url('/pexels-visit-greenland-360912.webp');
    background-position: center;
    background-size: cover;
    height: 100lvh;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: left;

    .top-text {
        padding-bottom: 53px;
        padding-left: 41px;
        width: 100%;
        max-width: 900px;
    }
`;

const Title = styled.h1`
    color: #fff;
    font-size: 5vw;
`;

const Top = () => {
    return (
        <StyleTop>
            <div className="top-text">
                <Title>
                    An R interface to
                    <br />
                    “Stable Diffusion” APIs, <br />
                    and additional APIs
                </Title>
            </div>
        </StyleTop>
    );
};

export default Top;
