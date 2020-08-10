import React, { useEffect } from "react";
import styled from "styled-components";

const StyledUnderConstruction = styled.div`
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
        .fa-paint-roller {
            position: absolute;
            left: 50%;
            bottom: 100%;
            transform: translateX(-50%);
            /* font-size: 5rem; */
        }
    }
    .message {
        font-size: 2.4rem;
    }
`;

const UnderConstruction = ({ match }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    //Removes the slash from path name
    const pageName = match.path.substring(1);
    return (
        <StyledUnderConstruction>
            <p className="header">
                <i className="fas fa-paint-roller"></i>Under Construction
            </p>
            <p className="message">
                We're sorry, <br />
                the{" "}
                <span className="capitalize">
                    {pageName.split("-").join(" ")}
                </span>{" "}
                page is coming soon!
            </p>
        </StyledUnderConstruction>
    );
};

export default UnderConstruction;
