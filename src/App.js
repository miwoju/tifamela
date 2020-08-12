import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PageNotFound from "./util/PageNotFound";
import Blog from "./pages/Blog";
import UnderConstruction from "./util/UnderConstruction";

const StyledApp = styled.div`
    --nav-height: 80px;
    width: 100%;
    color: ${(props) => props.theme.text.dark};
    .link {
        color: ${(props) => props.theme.text.dark};
        text-decoration: none;
    }
    .highlight {
        color: ${(props) => props.theme.color.tertiary};
        font-weight: 600;
    }
    .capitalize {
        text-transform: capitalize;
    }
`;

// const paletteUrl = "https://coolors.co/ffb5a7-fcd5ce-f8edeb-f9dcc4-fec89a";

const theme = {
    color: {
        primary: "#fcd5ce",
        secondary: "#fec89a",
        tertiary: "#ffb5a7",
        quaternary: "#f8edeb",
        quinary: "#f9dcc4",
    },
    text: {
        color: "#ffb5a7",
        dark: "#504f54",
    },
    light: {
        bg: "#FAF5F0",
    },
    dark: {
        bg: "#504f54",
    },
};

/**To add Under Construction page, route the soon-to-be component page path to component={UnderConstruction} */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollHeight: 0,
        };
        // this.handleScroll = this.handleScroll.bind(this);
    }
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }
    // handleScroll() {
    //     this.setState({
    //         scrollHeight: window.pageYOffset,
    //     });
    // }
    render() {
        const { scrollHeight } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Router>
                        <Navbar scrollHeight={scrollHeight} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/blog/baking"
                                component={Blog}
                            />
                            <Route
                                exact
                                path="/blog/makeup"
                                component={UnderConstruction}
                            />
                            <Route exact path="/about" component={Home} />
                            {/* <Route
                                exact
                                path="/:content/under-construction/"
                                component={UnderConstruction}
                            /> */}
                            <Route component={PageNotFound} />
                        </Switch>
                        <Footer />
                    </Router>
                </StyledApp>
            </ThemeProvider>
        );
    }
}

export default App;
