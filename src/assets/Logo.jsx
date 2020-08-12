import React from "react";
import styled from "styled-components";
import device from "../util/device";

const StyledLogo = styled.p`
    font-size: 2.4rem;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    @media ${device.phone} {
        font-size: 2rem;
    }
`;

const Logo = ({ className }) => {
    return (
        <StyledLogo className={className}>
            Tifa<span className="highlight">mela</span>
        </StyledLogo>
    );
};

export default Logo;
