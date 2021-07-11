import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


function filterLogic(items){

    const [filterParam, setFilterParam] = useState(['All']);
    const stateCts = useSelector(state.countryList) // <--- use this as items

    return stateCts.filter((ct) => {

        if(ct.region == filterParam) {
            return searchParam.some((newCts) => {
                return (
                    ct[newCts]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                )
            })
        } else if(filterParam == 'All') {
            return searchParam.some((newCts) => {
                return (
                    ct[newCts]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                )
            })
        }
    })
}


export default filterLogic;