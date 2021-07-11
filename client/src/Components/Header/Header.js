import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = (props) => {

    return (
        <div id='headerContainer'>
            <h1 id='headerText'><NavLink to='/home'>CountryApp</NavLink></h1>
        </div>
    )
}

export default Header;