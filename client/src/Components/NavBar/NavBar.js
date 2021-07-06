import ButtonFO from './ButtonFO/ButtonFO.js';
import CreateAct from './CreateAct/CreateAct.js';
import SearchBar from './SearchBar/SearchBar.js';
import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='wrapper'>
            <ButtonFO name='Filter'></ButtonFO>
            <ButtonFO name='Order'></ButtonFO>
            <SearchBar></SearchBar>
            <CreateAct></CreateAct>
        </div>
    )
}