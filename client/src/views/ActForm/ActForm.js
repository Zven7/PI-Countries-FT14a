import React, { useState, useEffect } from "react";
import { getAllCountries, postActivity } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import './ActForm.css';

const ActForm = (props) => {
    const dispatch = useDispatch();
    //const actList = useSelector(state => state.activitiesList);
    const countryList = useSelector(state => state.countryList);

    const [input, setInput] = useState({
        name: '',
        difficulty: 1,
        season: 'Winter',
        duration: 0,
        countryId: []
    });


    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])


    const [errors, setErrors] = useState({});


    function validate(input) {
        if (!input.name) {
            errors.name = 'You have to put a name for the activity'
        }

        if (!input.difficulty) {
            errors.difficulty = 'You have to set a difficulty for the activity'
        }

        if (!input.season) {
            errors.season = 'You have to specify a season for the activity'
        }

        if (!input.duration) {
            errors.duration = 'You have to set a duration for the activity'
        } else if (input.duration <= 0) {
            errors.duration = 'Invalid parameter'
        }

        if (!input.countryId){
            errors.countryId = 'No countries selected'
        }

        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (input.duration === '' || input.name === '' || input.countryId.length === 0) {
            alert('Invalid parameters')
            setErrors({});
            return
        }
        dispatch(postActivity(input));
        alert('Activity Created');
    }


    function handleChange(e) {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }

    function handleSelectChange(e) {
        let selectedItems = Array.from(e.target.selectedOptions, opt => opt.value);
        const newInput = {
            ...input,
            countryId: selectedItems
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }


    return (
        <div id='finalWrapperForm'>
            <div id='actFormWrapper'>
                <div id='formH1'><h1>Create Activity</h1></div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='divForInputs'>
                        <div>Name: </div>
                        <input
                            className='formInput'
                            type="text"
                            name='name'
                            placeholder='Activity Name...'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <div>Set Duration (Hs): </div>
                        <input
                            className='formInput'
                            type="number"
                            step='0.5'
                            name='duration'
                            min='0.5'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divForInputs'>
                        <div>Set Difficulty: </div>
                        <input
                            id=''
                            type="range"
                            name='difficulty'
                            min='1'
                            max='5'
                            onChange={handleChange}
                            list='tickmarks'
                        />
                    </div>

                    <div className='divForInputs'>
                        <label htmlFor="season">Select Season:
                            <select name="season" id="seasonSelection" onChange={handleChange}>
                                <option value="Winter">Winter</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <div>Select Countries: </div>
                        <select name="countryId" id="countriesSelect" onChange={handleSelectChange} multiple>
                            {countryList.map(ct => {
                                return <option
                                    key={ct.id}
                                    value={ct.id}
                                >{ct.name}</option>
                            })}
                        </select>
                    </div>

                    <button id='formButtonFF' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default ActForm;