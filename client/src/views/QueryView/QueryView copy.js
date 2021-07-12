import { getCountryQuery } from '../../Redux/actions'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../../Components/CountryCard/CountryCard';
import { Link, useParams } from 'react-router-dom';
import './QueryView.css';
import Pagination from '../Pagination';

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

        //Pagination
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentCt(pageNumber);
    }

    const indexOfLastCt = currentCt * ctsPerPage;
    const indexOfFirstCt = indexOfLastCt - ctsPerPage;
    const currentCts = cts1.slice(indexOfFirstCt, indexOfLastCt);

    return (
        <div>
            <h1>Found Countries</h1>
            <hr />
            {typeof countriesFromDb !== 'string'
                ? <div id='countryCardsContainer'>{countriesFromDb.map(ct => {
                    return <Link to={`/detail/${ct.id}`} key={ct.id} ><CountryCard className='cCard' name={ct.name} img={ct.image} continent={ct.continent} /></Link>
                })}
                <Pagination ctsPerPage={ctsPerPage} totalCts={cts1.length}      paginate={paginate}/>    
                </div> :
                <div id='errorMsgQuery'>
                    <h2>{countriesFromDb}</h2>
                    <Link to='/home'><button id='goBackButton'>Go Home</button></Link>
                </div>}
        </div>

    )
}
