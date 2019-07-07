import rootReducer from "./reducers/root";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default (initialState = {},extraStoreEnhancers = []) => {

  const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
  
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
