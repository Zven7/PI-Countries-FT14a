import React from "react";
import './CountryCard.css'

const CountryCard = (props) => {
    return (
        <div id='cardContainer'>
            <img src={props.img} alt="Country Flag" />
            <h1>{props.name}</h1>
            <h4>{props.continent}</h4>
        </div>
    )
}

export default CountryCard;