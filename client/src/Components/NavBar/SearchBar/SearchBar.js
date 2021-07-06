import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountryQuery } from '../../../Redux/actions'
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const countriesFromDb = useSelector(state => state.queryCountriesList)

    const [input, setInput] = useState({
        word: ''
    })

    const handleChange = (e) => {
        setInput({
            word: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(getCountryQuery(input.word))
        setInput({
            word: ''
        })
    }

    return (
        <>
            <form>
                <input
                    type='search'
                    placeholder='Search countries here...'
                    onChange={handleChange}

                />
                <button id='sendButton' type='submit' onSubmit={(e) => handleSubmit(e)}>GO!</button>
            </form>
        </>
    )
}