import rootReducer from "./reducers/root";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

const logAction = store => next => action => {
  let result;

  console.log(`action dispatched - ${action.type}`);
  result = next(action);

  return result;
};

const middleware = [thunk];

export default (initialState = {},extraStoreEnhancers = []) => {

  const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });

  console.log(initialState);
  
  let enhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...extraStoreEnhancers
  );

  return createStore(
    rootReducer,
    initialState,
    enhancers
  );
};
