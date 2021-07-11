import { GET_ONE_COUNTRY, GET_ALL_COUNTRIES, CREATE_ACTIVITY, GET_COUNTRY_QUERY } from '../constants';
import axios from 'axios';


export const getAllCountries = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries`)
            .then(r => r.data)
            .then(data => {
                console.log(data);
                dispatch({ type: GET_ALL_COUNTRIES, payload: data })
            })
    }
}

export const getCountryQuery = (name) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(r => r.data)
            .then(data => {
                console.log(data);
                dispatch({ type: GET_COUNTRY_QUERY, payload: data })
            })
    }
}

export const getOneCountry = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(r => r.data)
            .then(data => {
                console.log(data);
                dispatch({ type: GET_ONE_COUNTRY, payload: data })
            })
    }
}

/* export const postActivity = (payload) => {
    axios.post('https://localhost:3001/activity', payload)
        .then(data => {
            return (dispatch) => {
                dispatch({
                    type: CREATE_ACTIVITY,
                    payload: data
                })
            }
        })
        .catch(err => console.log(err))
} */

export const postActivity = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/activity", payload)
    };
}