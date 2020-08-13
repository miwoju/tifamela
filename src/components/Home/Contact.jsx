import React, { Component } from "react";
import styled from "styled-components";
import Socials from "./Socials";
import { email as myEmail } from "../../assets/social-info";
import device from "../../util/device";

const StyledContact = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    scroll-margin-top: 50px;
    @media ${device.phone} {
        padding: 10px;
    }
    h2 {
        font-size: 4rem;
        font-weight: 400;
        color: #fff;
        margin-bottom: 20px;
    }
    .subtext {
        font-size: 1.4rem;
        text-align: center;
        @media ${device.phone} {
            font-size: 1.2rem;
        }
    }
    .my-email {
        color: #00acee;
        font-size: 1.6rem;
        cursor: pointer;
        white-space: nowrap;
        @media ${device.phone} {
            font-size: 1.4rem;
            .fa-envelope {
                margin-right: -5px;
            }
        }
        .fa-envelope {
            color: #000;
            font-size: 1.6rem;
            padding: 0 10px;
        }
        &:hover {
            color: #000;
        }
    }
    form {
        max-width: 500px;
        background-color: ${(props) => props.theme.color.quinary};
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        padding: 20px;
        margin: 5px;
        border: 6px solid white;
        @media ${device.desktop} {
            padding: 10px;
        }
        @media ${device.tablet} {
            max-width: 90%;
        }
        @media ${device.phone} {
            max-width: 100%;
            padding: 5px;
        }
        input {
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            border: none;
            outline: none;
            padding: 0 10px;
            font-size: 1.8rem;
            @media ${device.desktop} {
                height: 35px;
                font-size: 1.6rem;
                margin-bottom: 10px;
            }
        }
        textarea {
            font-size: 1.8rem;
            font-family: "Poppins";
            height: 120px;
            width: 100%;
            border: none;
            outline: none;
            padding: 10px;
            margin-bottom: 25px;
            resize: none;
            @media ${device.desktop} {
                height: 140px;
                font-size: 1.5rem;
                margin-bottom: 15px;
            }
        }
        label {
            font-size: 1.4rem;
            display: inline-block;
            margin: 2px 4px;
        }
        button {
            width: 100%;
            border: none;
            padding: 12px;
            font-size: 1.6rem;
            background-color: ${(props) => props.theme.color.tertiary};
            cursor: pointer;
            @media ${device.desktop} {
                font-size: 1.4rem;
                padding: 10px;
                margin-bottom: 5px;
            }
        }
    }
`;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <StyledContact id="contact">
                <h2>contact</h2>
                <p className="subtext">
                    FEEL FREE TO EMAIL ME FOR ANY INQUIRIES OR USE FORM BELOW
                </p>
                <a href={`mailto:${myEmail}`} className="my-email">
                    <i className="far fa-envelope"></i>
                    {myEmail}
                </a>
                <form>
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="what you wish to be called by"
                    />
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="for me to contact back"
                    />
                    <label htmlFor="comment">comment</label>
                    <textarea
                        type="text"
                        id="comment"
                        placeholder="any comments, inquiries, or concerns"
                    />
                    <button>Submit</button>
                </form>
                <Socials />
            </StyledContact>
        );
    }
}

export default Contact;
