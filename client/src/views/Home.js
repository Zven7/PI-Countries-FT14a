import { getAllCountries } from '../Redux/actions';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import Cts from './Cts';
import './Home.css';

export default function Home() {

    const [cts, setCts] = useState([]);
    const [currentCt, setCurrentCt] = useState(1);
    const ctsPerPage= 12;

    const ctsFromState = useSelector(state => state.countryList);
    const filterType = useSelector(state => state.filterSelection);
    const dispatch = useDispatch();

    useEffect(() => {
        setCts(ctsFromState);
    }, [ctsFromState])

    
    useEffect(() => {
        console.log('Charging Countries')
        dispatch(getAllCountries())
    }, [])

    let cts1 = []

    if(filterType === 'All'){
        cts1 = cts;
    }else if(filterType === 'activity'){
        cts1 = cts.filter(ct => ct.activities.length > 0)
    }else {
        cts1 = cts.filter(ct => ct.continent === filterType)
    }


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
            <Cts cts={currentCts}/>
            <Pagination ctsPerPage={ctsPerPage} totalCts={cts1.length} paginate={paginate}/>
        </div>
    )
}