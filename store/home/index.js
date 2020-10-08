import { HYDRATE } from "next-redux-wrapper";
import { GET_LAUNCHES_SUCCESS } from "./types";

const initialState = {
  getLaunchesData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNCHES_SUCCESS:
      return {
        ...state,
        getLaunchesData: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
