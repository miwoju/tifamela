import React from "react";
import styled from "styled-components";
import bg1 from "../../images/bg-1.jpg";
// import bg2 from "../../images/bg-2.jpg";
// import profilePic from "../../images/profile-pic1.png";
import profilePic2 from "../../images/profile-pic2.jpg";
// import profilePic3 from "../../images/profile-pic3.jpg";
import {
    name as myName,
    location as myLocation,
} from "../../assets/social-info";
import device from "../../util/device";

const StyledAbout = styled.section`
    height: calc(100vh - var(--nav-height));
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url(${bg1}) center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    scroll-margin-top: 80px;
    @media ${device.desktop} {
        height: 800px;
    }
    @media ${device.phone} {
        height: 900px;
    }
`;
const AboutMe = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 65%;
    height: 100%;
    @media ${device.giant} {
        width: 90%;
    }
    @media ${device.tablet} {
        justify-content: space-evenly;
        flex-direction: column;
    }
`;

const Header = styled.div`
    position: absolute;
    padding: 5px 20px;
    background: rgba(255, 255, 255, 1);
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
    white-space: nowrap;
    .name {
        font-size: 5.5rem;
        font-family: "Dancing Script", cursive;
        color: ${(props) => props.theme.color.tertiary};
    }
    .subtext {
        font-size: 1.4rem;
        color: #000;
    }
    @media ${device.tablet} {
        position: relative;
        top: 0;
        left: 0;
        transform: translateX(0);
        margin-bottom: -60px;
    }
    @media ${device.phone} {
        .name {
            font-size: 4.5rem;
        }
        .subtext {
            font-size: 1rem;
        }
    }
`;

const ProfilePic = styled.div`
    background: url(${profilePic2}) center top no-repeat;
    /* background: url("https://firebasestorage.googleapis.com/v0/b/tifamela-702fc.appspot.com/o/profile-pic2.jpg?alt=media&token=f6e1e361-1eb8-4841-b9fa-f3ef0610673f") center top no-repeat; */
    background-size: cover;
    position: absolute;
    top: 10%;
    height: 80%;
    width: 45%;
    /* min-width: 375px; */
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    border: 12px solid white;
    @media ${device.desktop} {
        top: 20%;
        height: 60%;
    }
    @media ${device.tablet} {
        position: relative;
        top: 0;
        left: 0;
        height: 50%;
        width: 70%;
    }
    @media ${device.phone} {
        height: 45%;
        width: 100%;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 28%;
    left: 48%;
    background-color: ${(props) => props.theme.light.bg};
    padding: 0 20px;
    /* min-width: 400px; */
    p {
        font-size: 1.6rem;
        margin: 15px 0;
        text-align: justify;
    }
    @media ${device.tablet} {
        position: relative;
        top: 0;
        left: 0;
        p {
            font-size: 1.5rem;
        }
    }
    @media ${device.phone} {
        padding: 10px 20px;
        p {
            margin: 10px 0;
        }
    }
`;

const Bold = styled.span`
    font-weight: 600;
`;

const About = (props) => {
    const myFirstName = myName.split(" ")[0].toLowerCase();
    return (
        <StyledAbout id="about">
            <AboutMe>
                <Header>
                    <p className="name">about {myFirstName}</p>
                    <p className="subtext">Made in {myLocation}</p>
                </Header>
                <ProfilePic />
                <Content>
                    <p>
                        My name is <Bold>Melanie.</Bold>
                    </p>
                    <p>
                        ​What I enjoy the most is <Bold>listening</Bold> to
                        music while baking cute treats! I love to learn new
                        recipes and review them.
                    </p>
                    <p>
                        My blog expresses my <Bold>passion</Bold> on baking,
                        music, and skincare. I enjoyed writing when I was in
                        high school and continued writing in college in my
                        journalism classes. <Bold>Writing</Bold> was always a
                        passion of mine and this blog will help guide me to
                        write about my hobbies. I'm always fastinated and
                        <Bold> interested</Bold> in trying new things, talking
                        about them, and giving my <Bold>honest</Bold> opinions.
                    </p>
                    <p>
                        Hope you <Bold>enjoy</Bold> your stay here and learn
                        something new from my blog!
                    </p>
                </Content>
            </AboutMe>
        </StyledAbout>
    );
};

export default About;
