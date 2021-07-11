import { getCountryQuery } from '../../Redux/actions'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../../Components/CountryCard/CountryCard';
import { Link, useParams } from 'react-router-dom';
import './QueryView.css';

export default function QueryView(props) {
    const dispatch = useDispatch();
    const countriesFromDb = useSelector(state => state.queryCountryList)

    let { queryParam } = useParams();

    useEffect(() => {
        console.log('Charging Countries')
        dispatch(getCountryQuery(queryParam))
    }, [])

    console.log(queryParam)
    console.log(countriesFromDb, 'THIS IS THE QUERY STATE')

    return (
        <div>
            <h1>Found Countries</h1>
            <hr />
            {typeof countriesFromDb !== 'string'
                ? <div id='countryCardsContainer'>{countriesFromDb.map(ct => {
                    return <Link to={`/detail/${ct.id}`} key={ct.id} ><CountryCard className='cCard' name={ct.name} img={ct.image} continent={ct.continent} /></Link>
                })}
                </div> :
                <div id='errorMsgQuery'>
                    <h2>{countriesFromDb}</h2>
                    <Link to='/home'><button id='goBackButton'>Go Home</button></Link>
                </div>}
        </div>

    )
}
