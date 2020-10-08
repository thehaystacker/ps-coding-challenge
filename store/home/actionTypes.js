import { GET_LAUNCHES_SUCCESS } from "./types";

export const getLaunchesSuccessAction = (payload) => {
  return { type: GET_LAUNCHES_SUCCESS, payload };
};
