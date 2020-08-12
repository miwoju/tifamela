import React, { useEffect } from "react";
import styled from "styled-components";
import Baking from "../components/Blog/Baking";

const StyledBlog = styled.div`
    height: 100%;
    /* background-color: ${(props) => props.theme.light.bg}; */
`;

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <StyledBlog>
            <Baking />
        </StyledBlog>
    );
};

export default Blog;
