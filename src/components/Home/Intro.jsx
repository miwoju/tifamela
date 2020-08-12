import React from "react";
import styled from "styled-components";
import { name as myName } from "../../assets/social-info.json";
import { HashLink as Link } from "react-router-hash-link";
import device from "../../util/device";

const StyledIntro = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.light.bg};
    height: 100vh;
    padding: 0 20px;
    padding-bottom: 100px;
`;

const Name = styled.p`
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.theme.color.quinary};
    margin: 30px;
    padding: 0 10px;
    white-space: nowrap;
`;
const Header = styled.p`
    font-size: 5rem;
    color: ${(props) => props.theme.color.tertiary};
`;
const Content = styled.p`
    font-size: 2rem;
`;

const LearnMoreWrapper = styled.div`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    p {
        font-size: 1.4rem;
        margin-bottom: -25px;
        font-weight: 500;
        @media ${device.mobile} {
            font-size: 1.5rem;
        }
    }
    i {
        cursor: pointer;
        font-size: 3rem;
        color: ${(props) => props.theme.color.primary};
        padding: 25px;
        animation: 1.6s ease-in 0s infinite alternate heartbeat;
        &:hover {
            color: ${(props) => props.theme.color.tertiary};
        }
    }
    @keyframes heartbeat {
        from {
            color: ${(props) => props.theme.color.primary};
        }
        to {
            color: #fe8e86;
            transform: scale(1.1);
        }
    }
`;

const Intro = (props) => {
    return (
        <StyledIntro id="intro">
            <Name>{myName.toLowerCase()}</Name>
            <Header>who is she?</Header>
            <Content>
                a streamer who enjoys the company
                <br /> of her community
            </Content>
            <LearnMoreWrapper>
                <Link className="link" smooth to="/#about">
                    <p>click me</p>
                    <i className="fas fa-heart"></i>
                </Link>
            </LearnMoreWrapper>
        </StyledIntro>
    );
};

export default Intro;
