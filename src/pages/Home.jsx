import React from "react";
import styled from "styled-components";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import { name as myName } from "../assets/social-info.json";
import device from "../util/device";
import Intro from "../components/Home/Intro";

const StyledHome = styled.div`

`;

const Home = (props) => {
    return (
        <StyledHome>
            <Intro id="intro" />
            <About id="about" />
            <Contact id="contact" />
        </StyledHome>
    );
};

export default Home;
