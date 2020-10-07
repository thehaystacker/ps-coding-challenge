import homeReducer from "./home";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
