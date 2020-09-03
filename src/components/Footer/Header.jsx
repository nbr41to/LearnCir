import React from 'react';
import logo from "./logo.png"
import { StyledHeader } from "./Header.styled.jsx"

const Header = () => {
    // JavaScript Zone

    return (
        <StyledHeader>
            <img src={logo} alt="logo" />
            <h1>LearnCir</h1>
        </StyledHeader>
    );
}

export default Header;