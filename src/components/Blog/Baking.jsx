import React, { useState } from "react";
import styled from "styled-components";
import baking from "../../assets/baking";
import device from "../../util/device";

const StyledBaking = styled.div`
    padding: 0 200px;
    background-color: ${(props) => props.theme.light.bg};
    p {
        font-size: 1.4rem;
        margin-bottom: 20px;
    }
    li {
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin: 10px 0;
        font-weight: 500;
        letter-spacing: -0.6px;
    }
    .tighten {
        width: 80%;
    }
    @media ${device.desktop} {
        padding: 0 150px;
        .tighten {
            width: 100%;
        }
    }
    @media ${device.tablet} {
        padding: 0 50px;
        .tighten {
            width: 100%;
        }
    }
    @media ${device.phone} {
        padding: 0 20px;
    }
`;

const RecipeWrapper = styled.div`
    padding-top: 120px;
`;

const Header = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.tertiary};
`;

const Title = styled.h2`
    font-size: 4rem;
    color: ${(props) => props.theme.color.secondary};
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
`;

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding: 0 50px;
    flex-wrap: wrap;
    img {
        margin: 10px;
        width: 500px;
        height: 400px;
        object-fit: cover;
    }
    @media ${device.giant} {
        img {
            width: 450px;
        }
    }
    @media ${device.desktop} {
        object-fit: contain;
        justify-content: center;
        img {
            width: 600px;
            height: 100%;
        }
    }
    @media ${device.tablet} {
        img {
            width: 450px;
        }
    }
    @media ${device.phone} {
        img {
            width: 320px;
        }
    }
`;

const Intro = styled.div`
    margin: 50px auto;
    p {
        font-size: 1.6rem;
        font-weight: 400;
        /* font-style: italic; */
    }
`;

const StyledCheckbox = styled.div`
    position: relative;
    display: inline-block;
    min-width: 22px;
    min-height: 22px;
    margin-right: 15px;
    /* background-color: ${(props) => props.theme.text.dark}; */
    border: 1px solid ${(props) => props.theme.text.dark};
    i {
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* color: ${(props) => props.theme.text.dark}; */
        color: #fff;
    }
`;

const Recipe = styled.ul`
    li {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 500px;
        @media ${device.tablet} {
            width: 100%;
        }
        &:hover ${StyledCheckbox} {
            background-color: ${(props) => props.theme.color.secondary};
        }
        &:hover {
            color: ${(props) => props.theme.color.secondary};
        }
    }
    .selected {
        text-decoration: line-through;
        color: ${(props) => props.theme.color.secondary};
        ${StyledCheckbox} {
            background-color: ${(props) => props.theme.color.secondary};
            border: none;
        }
        i {
            display: inline-block;
        }
    }
    list-style-type: none;
    margin-bottom: 50px;
`;

const StyledNumber = styled.span`
    display: inline-block;
    color: #fff;
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 700;
    width: 25px;
    height: 25px;
    margin-right: 12px;
    text-align: center;
    background-color: ${(props) => props.theme.text.dark};
`;

const Directions = styled.ol`
    list-style-type: none;
    margin-bottom: 50px;
`;

const Thoughts = styled.h5`
    position: relative;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    padding: 15px 50px;
    font-style: italic;
    i {
        position: absolute;
        font-size: 2rem;
        color: ${(props) => props.theme.color.secondary};
        text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    }
    .fa-quote-left {
        top: 0;
        left: 0;
        margin-left: 30px;
    }
    .fa-quote-right {
        bottom: 0;
        right: 0;
        margin-right: 30px;
    }

    @media ${device.phone} {
        padding: 15px;
        .fa-quote-left {
            margin-left: -5px;
        }
        .fa-quote-right {
            margin-right: -5px;
        }
    }
`;

const Date = styled.p`
    margin-top: 100px;
    text-align: right;
`;

const Baking = (props) => {
    const [selected, setSelected] = useState({});
    const handleSelect = (index) => {
        setSelected({ ...selected, [index]: !selected[index] });
    };
    return (
        <StyledBaking>
            {baking.map(
                (
                    {
                        title,
                        images,
                        intro,
                        recipe,
                        directions,
                        thoughts,
                        createdAt,
                    },
                    index
                ) => (
                    <RecipeWrapper key={index}>
                        <Title>{title}</Title>
                        {images && (
                            <ImgWrapper>
                                {images.map((image) => (
                                    <img src={image} alt="food" />
                                ))}
                            </ImgWrapper>
                        )}
                        <Intro className="tighten">
                            {intro &&
                                intro.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                        </Intro>
                        <Header>What You'll Need</Header>
                        <Recipe className="tighten">
                            {recipe &&
                                recipe.map((item, index) => (
                                    <li
                                        className={`${
                                            selected[item] && "selected"
                                        }`}
                                        onClick={() => handleSelect(item)}
                                        key={index}
                                    >
                                        <StyledCheckbox>
                                            <i className="fas fa-check"></i>
                                        </StyledCheckbox>
                                        {item}
                                    </li>
                                ))}
                        </Recipe>
                        <Header>How To Make It</Header>
                        <Directions className="tighten">
                            {directions &&
                                directions.map((item, index) => (
                                    <li key={index}>
                                        <StyledNumber>{index + 1}</StyledNumber>
                                        {item}
                                    </li>
                                ))}
                        </Directions>
                        <Header>My Thoughts</Header>
                        <Thoughts>
                            <i className="fas fa-quote-left"></i>
                            {thoughts}
                            <i className="fas fa-quote-right"></i>
                        </Thoughts>
                        <Date>{createdAt}</Date>
                        <hr />
                    </RecipeWrapper>
                )
            )}
        </StyledBaking>
    );
};

export default Baking;
