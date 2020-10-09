import {
  GET_LAUNCHES_LOADING,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_ERROR,
  UPDATE_FILTER_LAUNCHYEAR,
  UPDATE_FILTER_LAUNCHSUCCESS,
  UPDATE_FILTER_LANDSUCCESS,
} from "./types";

export const updateFilterLaunchyearAction = (payload) => {
  return { type: UPDATE_FILTER_LAUNCHYEAR, payload };
};

export const updateFilterLaunchSuccessAction = (payload) => {
  return { type: UPDATE_FILTER_LAUNCHSUCCESS, payload };
};

export const updateFilterLandSuccessAction = (payload) => {
  return { type: UPDATE_FILTER_LANDSUCCESS, payload };
};

export const getLaunchesLoadingAction = (payload) => {
  return { type: GET_LAUNCHES_LOADING, payload };
};
export const getLaunchesSuccessAction = (payload) => {
  return { type: GET_LAUNCHES_SUCCESS, payload };
};
export const getLaunchesErrorAction = (payload) => {
  return { type: GET_LAUNCHES_ERROR, payload };
};
