import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCountry } from "../../Redux/actions";
import './CountryDetails.css'
import { Link } from "react-router-dom";

const CountryDetails = (props) => {
    const dispatch = useDispatch();
    const ctDet = useSelector(state => state.singleCountry)
    let { id } = useParams();

    useEffect(() => {
        console.log('Getting Details!');

        dispatch(getOneCountry(id))
    }, [])

    console.log(ctDet)

    return (
        <React.Fragment>
            <div id='buttonContainerDetail'>
                <button id='goBackButton' type='button'>
                    <Link to='/home'>Go Back</Link>
                </button>
            </div>


            <div id='detailedCountry'>
                <div id='imgContainer'><img src={ctDet.image} alt={`Flag of ${ctDet.name}`} /></div>
                <div>
                    <h1><a href={`https://en.wikipedia.org/wiki/${ctDet.name}`}>{ctDet.name} ({ctDet.id})</a></h1>
                    <h2>Capital: {ctDet.capital}</h2>
                    <h3>Continent: {ctDet.continent}</h3>
                    <h3>Subregion: {ctDet.subregion}</h3>
                    <h4>Area: {ctDet.area}</h4>
                    <h4>Population: {ctDet.population}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}


export default CountryDetails;

