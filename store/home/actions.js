import { getLaunchesSuccessAction } from "./actionTypes";

export const fetchLaunches = async () => {
  return await fetch(
    `https://api.spacexdata.com/v3/launches?limit=10`
  ).then((res) => res.json());
};

export const getLaunchesAction = () => async (dispatch) => {
  const response = await fetchLaunches();

  dispatch(
    getLaunchesSuccessAction([
      { flight_number: 1, mission_name: "Sangeeth" },
      { flight_number: 2, mission_name: "Sangeeth ks" },
      { flight_number: 3, mission_name: "Sarath" },
    ])
  );
};
