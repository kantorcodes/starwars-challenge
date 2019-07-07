import C from "../constants";
import {combineReducers} from 'redux';

export const isMobile = (state = false, action ) => {
    switch(action.type)
    {
        case C.UPDATE_IS_MOBILE:
            return action.payload;
        default:
            return state;
    }
}

export const lastLocation = (state = '\\',action) => {
    switch(action.type)
    {
        case C.UPDATE_LOCATION:
            return action.payload;
        default:
            return state;
    }
}

export const currentWidth = (state = 550, action ) => {
    switch(action.type)
    {
        case C.UPDATE_CURRENT_WIDTH:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    isMobile,
    currentWidth,
    lastLocation
})

