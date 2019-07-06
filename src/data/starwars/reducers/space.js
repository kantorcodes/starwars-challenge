import C from "~/data/starwars/constants";
import { combineReducers } from "redux";


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
      let currentState = {...state};
      currentState.results = currentState.results.concat(action.payload.results);
      currentState.error = action.payload.error;
      
      return currentState;
    default:
      return state;
  }
}
export const films = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_FILMS:
      console.log(action);
      return state.concat(action.payload);
    default:
      return state;
  }
}

export const starships = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_STARSHIPS:
      console.log(action);
      return state.concat(action.payload);
    default:
      return state;
  }
}

export const vehicles = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_VEHICLES:
      console.log(action);
      return state.concat(action.payload);
    default:
      return state;
  }
}

export const species = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_SPECIES:
      console.log(action);
      return state.concat(action.payload);
    default:
      return state;
  }
}

export const planets = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_PLANETS:
      console.log(action);
      return state.concat(action.payload);
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
