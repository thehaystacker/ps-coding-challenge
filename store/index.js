import { createStore, combineReducers, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import homeReducer from "./home";

const rootReducer = combineReducers({
  home: homeReducer,
});

const makeStore = () => createStore(rootReducer, applyMiddleware(thunk));
export const wrapper = createWrapper(makeStore);
