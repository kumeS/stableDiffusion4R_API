'use client';

import { About, Header, Top, Container, GenerateImg } from './index';
import './global.css';

const Home = () => {
    return (
        <>
            <Header />
            <Top />
            <Container>
                <About />
                <GenerateImg />
            </Container>
        </>
    );
};

export default Home;
