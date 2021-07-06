import { getAllCountries } from '../Redux/actions'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../Components/CountryCard/CountryCard';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const ctsFromState = useSelector(state => state.countryList);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Charging Countries')
        dispatch(getAllCountries())
    }, [])

    console.log(ctsFromState, 'THIS IS THE STATE')

    return (
        <div id='countryCardsContainer'>{ctsFromState.map(ct => {
            return <Link to={`/detail/${ct.id}`} key={ct.id} ><CountryCard className='cCard' name={ct.name} img={ct.image} continent={ct.continent} /></Link>
        })}
        </div>
    )
}

{/* <React.Fragment>
                <h1>{ct.name}</h1>
                <img src={ct.image} />
            </React.Fragment> */}