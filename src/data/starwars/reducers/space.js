import C from "~/data/starwars/constants";
import { combineReducers } from "redux";
import { pushPage } from "../helpers";


export const fetching = (state = false, action) => {
  switch (action.type) {
    case C.FETCHING_DATA:
      return action.payload;
    default:
      return state;
  }
}

export const people = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_PEOPLE:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}
export const films = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_FILMS:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}

export const starships = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_STARSHIPS:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}

export const vehicles = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_VEHICLES:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}

export const species = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_SPECIES:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}

export const planets = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_PLANETS:
      return pushPage(state, action.payload);
    default:
      return state;
  }
}



export default combineReducers({
  people,
  films,
  starships,
  vehicles,
  species,
  planets,
  fetching
})
