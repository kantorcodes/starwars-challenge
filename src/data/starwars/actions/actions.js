
import C from '~/data/starwars/constants';
import { get } from '~/services/swService';

export const fetchingData = (fetching = true) => {
    return {
        type: C.FETCHING_DATA,
        payload: fetching
    }
}

export const fetchResource = (page = 1, resource) => async (dispatch, getState) => {
   
    console.log('someone called me...');
    let result = await get(page, resource);

    console.log(resource);

    dispatch({
        type: C[`FETCH_${resource.toUpperCase()}`],
        payload: result
    })
}