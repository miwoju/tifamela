import React from "react";
import styled from "styled-components";

//!Depreciated for now
const StyledNavMenu = styled.div`
    position: relative;
    /* display: flex; */
    /* flex-direction: column; */
    .menu {
        border: 1px solid ${(props) => props.theme.color.tertiary};
        background-color: ${(props) => props.theme.color.quaternary};
        position: absolute;
        top: 0;
        left: -18%;
    }
`;

const NavMenu = ({
    id,
    className,
    title,
    anchorEl,
    open,
    onClose,
    children,
}) => {
    return (
        <StyledNavMenu
            id={id}
            className={className}
            // style={{ display: `${open ? "inline-block" : "none"}` }}
            onClose={onClose}
        >
            {title}
            {!open && (
                <div className="menu">
                    {children.map((child) => (
                        <p>{child}</p>
                    ))}
                </div>
            )}
        </StyledNavMenu>
    );
};

export default NavMenu;
