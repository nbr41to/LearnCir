import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import logo from "../../images/logo.png"
import name_logo from "../../images/name_logo.png"
import { StyledHeader } from "./Header.styled.jsx"

const Header = () => {
    // JavaScript Zone

    return (
        <StyledHeader>
            <Link to="/" className="logo">
                <img src={name_logo} alt="logo" />
                {/* <img src={logo} alt="logo" />
            <h1>LearnCir</h1> */}
            </Link>
            <nav className="menu">
                <h2>MENU</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contents'>Contents</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;