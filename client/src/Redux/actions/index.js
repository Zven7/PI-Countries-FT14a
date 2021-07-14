import { GET_ONE_COUNTRY, GET_ALL_COUNTRIES, GET_COUNTRY_QUERY, GET_FILTER_TYPE, GET_ORDER_PARAM } from '../constants';
import axios from 'axios';


export const getAllCountries = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_COUNTRIES, payload: data })
            })
    }
}

export const getCountryQuery = (name) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_COUNTRY_QUERY, payload: data })
            })
    }
}

export const getOneCountry = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ONE_COUNTRY, payload: data })
            })
    }
}

export const postActivity = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/activity", payload)
    };
}

export const getFilterType = (filterType) => {
    return (dispatch) => {
            dispatch({ type: GET_FILTER_TYPE, payload: filterType })
    }  
}

export const getOrderParam = (orderParam) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries?order=${orderParam}`)
        .then(r => r.data)
        .then(data => {
            dispatch({ type: GET_ALL_COUNTRIES, payload: data })
        })
        dispatch({ type: GET_ORDER_PARAM, payload: orderParam })
    }  
}