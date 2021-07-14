import React, { useState, useEffect } from 'react';
import { getCountryQuery } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CountryCard from '../../Components/CountryCard/CountryCard';
import Pagination from '../../Components/Pagination/Pagination';
import './QueryView.css';

export default function QueryView() {
    const dispatch = useDispatch();
    const countriesFromDb = useSelector(state => state.queryCountryList);
    const [cts, setCts] = useState([]);
    const [currentCt, setCurrentCt] = useState(1);
    const ctsPerPage= 12;

    let { queryParam } = useParams();

    useEffect(() => {
        dispatch(getCountryQuery(queryParam))
    }, [dispatch, queryParam])

    useEffect(() => {
        setCts(countriesFromDb);
    }, [countriesFromDb])

    //Pagination
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentCt(pageNumber);
    }

    const indexOfLastCt = currentCt * ctsPerPage;
    const indexOfFirstCt = indexOfLastCt - ctsPerPage;
    const currentCts = cts.slice(indexOfFirstCt, indexOfLastCt);


    return (
        <div id='queryContainer'>
            <h1>Found Countries</h1>
            <hr />
            {typeof countriesFromDb !== 'string'
                ? <div>
                    <div id='countryCardsContainer'>{currentCts.map(ct => {
                    return <Link to={`/detail/${ct.id}`} key={ct.id} ><CountryCard className='cCard' name={ct.name} img={ct.image} continent={ct.continent} /></Link>
                })}
                </div>
                <div>
                <Pagination ctsPerPage={ctsPerPage} totalCts={cts.length} paginate={paginate}/>  
                </div> 
                </div>
                :<div id='errorMsgQuery'>
                    <h2>{countriesFromDb}</h2>
                    <Link to='/home'><button id='goBackButton'>Go Home</button></Link>
                </div>}
        </div>
    )
}
