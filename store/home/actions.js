export const getLaunchesAction = async () => {
  const response = await fetch(
    `https://api.spacexdata.com/v3/launches?limit=10`
  ).then((res) => res.json());
  return response;
};
