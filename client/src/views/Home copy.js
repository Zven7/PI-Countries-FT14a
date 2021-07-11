import { getAllCountries } from '../Redux/actions'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from '../Components/CountryCard/CountryCard';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import Cts from './Cts';
import './Home.css';

export default function Home() {

    const [cts, setCts] = useState([]);
    const [currentCt, setCurrentCt] = useState(1);
    const ctsPerPage= 12;

    const ctsFromState = useSelector(state => state.countryList);
    const dispatch = useDispatch();

    useEffect(() => {
        setCts(ctsFromState);
    }, [ctsFromState])


    
    useEffect(() => {
        console.log('Charging Countries')
        dispatch(getAllCountries())
    }, [])



    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentCt(pageNumber);
    }
    const indexOfLastCt = currentCt * ctsPerPage;
    const indexOfFirstCt = indexOfLastCt - ctsPerPage;
    const currentCts = cts.slice(indexOfFirstCt, indexOfLastCt);

    console.log(currentCts, 'CURRENT COUNTRIES');

    return (
        <div>
            <Cts cts={currentCts}/>
            <Pagination ctsPerPage={ctsPerPage} totalCts={cts.length} paginate={paginate}/>
        </div>
    )
}