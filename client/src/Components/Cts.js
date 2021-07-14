import React from 'react';
import CountryCard from '../Components/CountryCard/CountryCard';
import { Link } from 'react-router-dom';


function Cts({cts}) {
    return (
        <div>
            <div id='countryCardsContainer'>{cts.map(ct => { //previously ctsFromState.map
            return <Link to={`/detail/${ct.id}`} key={ct.id} ><CountryCard className='cCard' name={ct.name} img={ct.image} continent={ct.continent} /></Link>
            })}
            </div>
        </div>
    )
}

export default Cts;
