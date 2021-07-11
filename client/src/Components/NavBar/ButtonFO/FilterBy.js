import './ButtonFO.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function FilterBy() {

    const dispatch = useDispatch();
    const countryList = useSelector(state => state.countryList)



    return (
        <div id="Filter">
            <select name="filterBy" >
                <option value="FilterDefault" selected>Filter By:</option>
                <option value="continent">Continent</option>
                <option value="activity">Activity</option>
            </select>
        </div>
    )
}