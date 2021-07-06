import { GET_ONE_COUNTRY, GET_ALL_COUNTRIES, CREATE_ACTIVITY, GET_COUNTRY_QUERY } from '../constants';
import axios from 'axios';

const initialState = {
    activitiesList: [],
    countryList: [],
    queryCountryList: [],
    singleCountry: {}
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ONE_COUNTRY:
            return {
                ...state,
                singleCountry: payload
            };
        case GET_ALL_COUNTRIES:
            console.log('GET ALL Payload', payload)
            return {
                ...state,
                countryList: payload
            };
        case GET_COUNTRY_QUERY:
            console.log('GET QUERY Payload', payload)
            return {
                ...state,
                queryCountryList: payload
            };
        case CREATE_ACTIVITY:
            axios.post('https://localhost:3001/activity', payload)
            return {
                ...state,
                successMsg: 'Activity Added!'
            }
        default:
            return state;
    }
}

export default rootReducer;