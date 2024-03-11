import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const StyleHeader = styled.header`
    width: 100%;
    padding-top: 31px;
    position: absolute;
    z-index: 1;

    .nav-box {
        width: 236px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin: 0 auto;
        font-size: 24px;
        color: rgb(255, 255, 255);
    }

    .nav-github {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 60px;
        position: absolute;
        top: 31px;
        right: 70px;
    }
`;

const Header = () => {
    return (
        <StyleHeader>
            <nav>
                <div className="nav-box">stableDiffusion4R</div>
                <a href="https://github.com/kumeS/stableDiffusion4R_API">
                    <IconContext.Provider value={{ color: 'white', className: 'nav-github' }}>
                        <div>
                            <FaGithub />
                        </div>
                    </IconContext.Provider>
                </a>
            </nav>
        </StyleHeader>
    );
};

export default Header;
