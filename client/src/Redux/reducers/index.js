import { GET_ONE_COUNTRY, GET_ALL_COUNTRIES, CREATE_ACTIVITY, GET_COUNTRY_QUERY, GET_FILTER_TYPE, GET_ORDER_PARAM } from '../constants';


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
            return {
                ...state,
                countryList: payload
            };
        case GET_COUNTRY_QUERY:
            return {
                ...state,
                queryCountryList: payload
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                activitiesList: payload
            }
        case GET_FILTER_TYPE:
            return {
                ...state, 
                filterSelection: payload
            }
        case GET_ORDER_PARAM:
            return {
                ...state, 
                orderSelection: payload
            }
        default:
            return state;
    }
}

export default rootReducer;