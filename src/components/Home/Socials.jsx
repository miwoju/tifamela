import React from "react";
import styled from "styled-components";
import {
    twitter as hrefTwitter,
    twitch as hrefTwitch,
    instagram as hrefInstagram,
    youtube as hrefYoutube,
    tiktok as hrefTiktok,
    // snapchat as hrefSnapchat,
    // paypal as hrefPaypal,
} from "../../assets/social-info.json";
import device from "../../util/device";

const StyledSocials = styled.div`
    margin-top: 60px;
    text-align: center;
    p {
        font-size: 1.4rem;
    }
    i {
        font-size: 3rem;
        padding: 10px 20px;
        transition: color 0.1s ease-in-out;
        color: ${(props) => props.theme.text.dark};
    }
    .social-links1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        width: 350px;
        margin: 0 auto;
        .fa-instagram:hover {
            cursor: pointer;
            color: #fff;
        }
        .fa-twitter:hover {
            cursor: pointer;
            color: #00acee;
        }
        .fa-youtube:hover {
            cursor: pointer;
            color: #ff0000;
        }
        .fa-tiktok:hover {
            cursor: pointer;
            color: #69c9d0;
        }
        .fa-twitch:hover {
            cursor: pointer;
            color: #6441a5;
        }
        @media ${device.phone} {
            margin-top: 10px;
        }
    }
    .social-links2 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        margin: 10px 0 30px 0;
        .snapchat {
            grid-column: 2/3;
            &:hover {
                .fa-snapchat-ghost {
                    cursor: pointer;
                    color: #fffc00;
                }
                p {
                    color: #fffc00;
                }
            }
        }
        .paypal {
            grid-column: 3/4;
            &:hover {
                .fa-paypal {
                    cursor: pointer;
                    color: #00457c;
                }
                p {
                    color: #00457c;
                }
            }
        }
        p {
            margin-top: -5px;
        }
    }
`;

const Socials = () => {
    return (
        <StyledSocials>
            <p>my social media</p>
            <div className="social-links1">
                <a
                    href={hrefInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a href={hrefTwitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={hrefYoutube} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href={hrefTiktok} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href={hrefTwitch} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitch"></i>
                </a>
            </div>
            <div className="social-links2">
                <div className="snapchat">
                    <i className="fab fa-snapchat-ghost"></i>
                    <p>tifamela</p>
                </div>
                <div className="paypal">
                    <i className="fab fa-paypal"></i>
                    <p>tifamel4@gmail.com</p>
                </div>
            </div>
        </StyledSocials>
    );
};

export default Socials;
