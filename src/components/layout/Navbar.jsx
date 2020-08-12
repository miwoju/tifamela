import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Logo from "../../assets/Logo";
// import { twitch as hrefTwitch } from "../../assets/social-info.json";
import device from "../../util/device";

const StyledNavbar = styled.nav`
    .scrolled-nav {
        background-color: ${(props) => props.theme.color.primary};
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
        .highlight {
            color: #fff;
        }
        .nav-item:hover {
            border-color: #fff;
            .link {
                color: #fff;
            }
            /* .highlight {
                color: ${(props) => props.theme.color.tertiary};
            } */
        }
    }
`;

const Nav = styled.ul`
    transition: all 0.3s ease-in-out;
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: 2fr minmax(0px, 8fr) 4fr;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    padding: 0 30px;
    z-index: 99;
    @media ${device.phone} {
        padding-right: 0;
    }
`;

const NavItems = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-column: 3/4;
    .hamburger-opened {
        .line {
            position: absolute;
        }
        .line1 {
            transition: transform 0.6s ease-in-out;
            transform: rotate(225deg);
        }
        .line2 {
            display: none;
        }
        .line3 {
            transition: transform 0.4s ease-in-out;
            transform: rotate(-45deg);
        }
    }
`;

const NavItem = styled.li`
    font-size: 1.8rem;
    border: 1px solid transparent;
    padding: 7px;
    transition: all 0.1s ease-in-out;
    color: black;
    white-space: nowrap;
    &:hover {
        border-color: ${(props) => props.theme.color.tertiary};
        .link {
            color: ${(props) => props.theme.color.tertiary};
        }
    }
    @media ${device.phone} {
        display: none;
    }
`;
const HamburgerMenu = styled.div`
    position: relative;
    width: 40px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    .line {
        display: none;
        background: ${(props) => props.theme.text.dark};
        height: 5px;
        width: 100%;
    }
    @media ${device.phone} {
        .line {
            display: block;
        }
    }
`;
const ExpandedMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
    white-space: nowrap;
    background-color: ${(props) => props.theme.color.primary};
    .link {
        padding: 50px 100px;
    }
`;

const Navbar = (props) => {
    // const Navbar = ({ scrollHeight }) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const handleClick = () => {
        setMenuToggle(!menuToggle);
    };
    const handleClose = () => {
        setMenuToggle(false);
    };

    const [scrollHeight, setScrollHeight] = useState();
    const handleScroll = () => {
        setScrollHeight(window.pageYOffset);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <StyledNavbar>
            <Nav className={`${scrollHeight > 50 && "scrolled-nav"}`}>
                <NavLink smooth className="link" to="/#intro">
                    <Logo />
                </NavLink>
                <NavItems>
                    <HamburgerMenu
                        className={menuToggle && "hamburger-opened"}
                        onClick={handleClick}
                    >
                        <div className="line1 line" />
                        <div className="line2 line" />
                        <div className="line3 line" />
                    </HamburgerMenu>
                    {menuToggle && (
                        <ExpandedMenu>
                            <NavLink
                                onClick={handleClose}
                                smooth
                                className="link"
                                to="/#about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                onClick={handleClose}
                                className="link"
                                to="/blog/baking"
                            >
                                Baking
                            </NavLink>

                            <NavLink
                                onClick={handleClose}
                                className="link"
                                to="/blog/makeup"
                            >
                                Makeup & Skincare
                            </NavLink>

                            <NavLink
                                onClick={handleClose}
                                smooth
                                className="link"
                                to="/#contact"
                            >
                                Contact
                            </NavLink>
                        </ExpandedMenu>
                    )}
                    <NavItem className="nav-item">
                        <NavLink smooth className="link" to="/#about">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="link" to="/blog/baking">
                            Baking
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="link" to="/blog/makeup">
                            Makeup<span className="highlight">/</span>Skincare
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink smooth className="link" to="/#contact">
                            Contact
                        </NavLink>
                    </NavItem>
                </NavItems>
            </Nav>
        </StyledNavbar>
    );
};

export default Navbar;
