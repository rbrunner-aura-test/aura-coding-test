import { createStore, combineReducers, applyMiddleware } from "redux";
import { compose } from "./devTools";
import thunk from "redux-thunk";

// Return a store initializer
function init(reducers = {}, state) {
  return createStore(
    combineReducers(reducers),
    state || {},
    compose(applyMiddleware(thunk))
  );
}

export { init };
