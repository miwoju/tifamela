import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//!Depreciated for now
const StyledNavMenuItem = styled.div`
    padding: 7px;
    &:hover {
        background-color: ${(props) => props.theme.color.quinary};
    }
`;

const NavMenuItem = ({ to, children }) => {
    return (
        <StyledNavMenuItem>
            <NavLink className="link" to={to}>
                {children}
            </NavLink>
        </StyledNavMenuItem>
    );
};

export default NavMenuItem;
