import React, { useEffect } from "react";
import { getOneCountry } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useParams, Redirect } from "react-router-dom";
import { FaLongArrowAltDown } from 'react-icons/fa';
import ActivityCard from "./ActivityCard";
import CreateAct from '../../Components/NavBar/CreateAct/CreateAct';
import './CountryDetails.css';


const CountryDetails = () => {
    const dispatch = useDispatch();
    const ctDet = useSelector(state => state.singleCountry)
    let { id } = useParams();

    useEffect(() => {
        dispatch(getOneCountry(id))
    }, [dispatch, id])


    if(ctDet === null){
        return (
            <Route>
                <Redirect to='/incorrect'/>
            </Route>
        )
    }

    return (
        <React.Fragment>
            <div id='countryDetailsContainer'>
                <div id='buttonContainerDetail'>
                    <Link to='/home'><button id='goBackButton' type='button'>Go Home</button></Link>
                </div>

                <div id='detailedCountry'>
                    <div id='imgContainer'><img src={ctDet.image} alt={`Flag of ${ctDet.name}`} /></div>
                    <div>
                        <h1><a rel='noreferrer noopener' href={`https://en.wikipedia.org/wiki/${ctDet.name}`} target='_blank'>{ctDet.name} ({ctDet.id})</a></h1>
                        <h2>Capital: {ctDet.capital}</h2>
                        <h3>Continent: {ctDet.continent}</h3>
                        <h3>Subregion: {ctDet.subregion}</h3>
                        <h4>Area: {ctDet.area} Km2</h4>
                        <h4>Population: {ctDet.population}</h4>

                    </div>
                </div>
                <div id='actHeader'><FaLongArrowAltDown /><h2> Activities </h2><FaLongArrowAltDown /></div>
                <hr />
                <div id='activitiesList'>
                    {ctDet.activities && ctDet.activities.length > 0
                        ? ctDet.activities.map(act => {
                            return <ActivityCard
                                key={act.id}
                                name={act.name}
                                difficulty={act.difficulty}
                                season={act.season}
                                duration={act.duration}
                            />
                        })
                        : <div id='activitiesLinkFFFFF'><h4>No activities submitted for this country yet, be the first one!</h4>
                            <CreateAct id='createActLink' />
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}


export default CountryDetails;

