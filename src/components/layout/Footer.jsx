import React from "react";
import styled from "styled-components";
import device from "../../util/device";

const StyledHome = styled.div`
    width: 100%;
    position: relative;
    .footer-container {
        padding: 100px 120px;
        @media ${device.tablet} {
            padding: 100px 40px;
        }
        @media ${device.phone} {
            padding: 60px 20px 100px 20px;
        }
        .footer-message {
            font-size: 2.2rem;
            color: ${(props) => props.theme.color.tertiary};
            .highlight {
                color: ${(props) => props.theme.color.quinary};
                font-style: italic;
                text-decoration: underline;
                cursor: pointer;
                &:hover {
                    color: ${(props) => props.theme.text.dark};
                }
            }
        }
        .footer-submessage {
            font-size: 1.6rem;
        }
    }
    .copyright {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 1.3rem;
        margin: 20px;
        color: black;
        white-space: nowrap;
        @media ${device.phone} {
            margin: 0 20px;
        }
    }
`;

const HomeCopy = (props) => {
    return (
        <StyledHome>
            <div className="footer-container">
                <p className="footer-message">
                    Thanks for coming by,{" "}
                    <span className="highlight"> you can check me out!</span>
                </p>
                <p className="footer-submessage">
                    I look forward to seeing you :D
                </p>
            </div>
            <p className="copyright">
                © Copyright 2020 | Developed & Designed by Richard D. Shin
            </p>
        </StyledHome>
    );
};

export default HomeCopy;
