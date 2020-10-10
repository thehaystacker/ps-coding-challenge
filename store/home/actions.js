import {
  getLaunchesLoadingAction,
  getLaunchesSuccessAction,
} from "./actionTypes";

export const fetchLaunches = async (query = {}) => {
  try {
    let url = new URL(`https://api.spacexdata.com/v3/launches`);
    url.search = new URLSearchParams({ ...query, limit: 16 });
    return await fetch(url).then((res) => res.json());
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getLaunchesAction = () => async (dispatch, getState) => {
  dispatch(getLaunchesLoadingAction(true));

  const {
    home: { launch_year, launch_success, land_success, limit },
  } = getState();

  const response = await fetchLaunches({
    launch_year,
    launch_success,
    land_success,
    limit,
  });

  dispatch(getLaunchesLoadingAction(false));

  dispatch(getLaunchesSuccessAction(response));
};
