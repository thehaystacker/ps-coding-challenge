import {
  GET_LAUNCHES_LOADING,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_ERROR,
  UPDATE_FILTER_LAUNCHYEAR,
  UPDATE_FILTER_LAUNCHSUCCESS,
  UPDATE_FILTER_LANDSUCCESS,
} from "./types";

const initialState = {
  launch_year: "",
  launch_success: "",
  land_success: "",
  limit: 16,
  getLaunchesLoading: true,
  getLaunchesData: null,
  getLaunchesError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNCHES_LOADING:
      return {
        ...state,
        getLaunchesLoading: action.payload,
      };
    case GET_LAUNCHES_SUCCESS:
      return {
        ...state,
        getLaunchesLoading: false,
        getLaunchesData: action.payload,
      };
    case GET_LAUNCHES_ERROR:
      return {
        ...state,
        getLaunchesLoading: false,
        getLaunchesError: action.payload,
      };
    case UPDATE_FILTER_LAUNCHYEAR:
      return {
        ...state,
        launch_year: action.payload,
      };
    case UPDATE_FILTER_LAUNCHSUCCESS:
      return {
        ...state,
        launch_success: action.payload,
      };
    case UPDATE_FILTER_LANDSUCCESS:
      return {
        ...state,
        land_success: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
