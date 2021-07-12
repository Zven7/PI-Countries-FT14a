import { GET_ONE_COUNTRY, GET_ALL_COUNTRIES, CREATE_ACTIVITY, GET_COUNTRY_QUERY, GET_FILTER_TYPE, GET_ORDER_PARAM } from '../constants';
import axios from 'axios';

const initialState = {
    activitiesList: [],
    countryList: [],
    queryCountryList: [],
    singleCountry: {},
    filterSelection: 'All',
    orderSelection: 'ASC'
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
            console.log('POST Payload', payload)
            return {
                ...state,
                activitiesList: payload
            }
        case GET_FILTER_TYPE:
            console.log('FILTER PAYLOAD -->', payload);
            return {
                ...state, 
                filterSelection: payload
            }
        case GET_ORDER_PARAM:
            console.log('ORDER PAYLOAD -->', payload);
            return {
                ...state, 
                orderSelection: payload
            }
        default:
            return state;
    }
}

export default rootReducer;