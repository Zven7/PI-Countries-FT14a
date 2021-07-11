import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        
        <div id='landingPageBody'>
            <div id='landingPageBodyCover'>
                <Link to='/home' id='homeLinkButton'><button>Search Countries!</button></Link>
            </div>
        </div>
    )
}

export default LandingPage
