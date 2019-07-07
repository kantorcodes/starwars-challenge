
import C from '~/data/starwars/constants';
import { get } from '~/services/swService';

export const fetchingData = (fetching = true) => {
    return {
        type: C.FETCHING_DATA,
        payload: fetching
    }
}

export const updateIsMobile = (isMobile = false) => {
    return {
        type: C.UPDATE_IS_MOBILE,
        payload: isMobile
    }
}

export const updateCurrentWidth = (currentWidth) => {
    return {
        type: C.UPDATE_CURRENT_WIDTH,
        payload: currentWidth
    }
}

export const updateLocation = (lastLocation) => {
    return {
        type: C.UPDATE_LOCATION,
        payload: lastLocation
    }
}


export const fetchResource = (page = 1, resource) => async (dispatch, getState) => {

    let result = await get(page, resource);

    dispatch({
        type: C[`FETCH_${resource.toUpperCase()}`],
        payload: { result, page }
    })
}

