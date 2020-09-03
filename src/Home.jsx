import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { StyledHome } from './Home.styled'

const Home = () => {
    // JavaScript Zone

    return (
        <StyledHome>
            <div className="catch">
                <div className="catchcopy">
                    <h1>時代が変わる前に 自分を変えよう</h1>
                    <p>Before change the world, Improve yourself. </p>
                </div>
            </div>
        </StyledHome>
    );
}

export default Home;