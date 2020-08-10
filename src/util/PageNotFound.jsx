import React from "react";
import styled from "styled-components";

const StyledPageNotFound = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.quaternary};
    text-align: center;
    .header {
        position: relative;
        font-size: 4rem;
        margin-bottom: 20px;
        .fa-exclamation-triangle {
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin: 0 15px;
        }
    }
    .message {
        font-size: 2.4rem;
    }
`;

const PageNotFound = () => {
    return (
        <StyledPageNotFound>
            <p className="header">
                Page Not Found<i className="fas fa-exclamation-triangle"></i>
            </p>
            <p className="message">Sorry, this page does not exist.</p>
        </StyledPageNotFound>
    );
};

export default PageNotFound;
