import queryString from "query-string";

function usePageRouting(router) {
  const updateQuery = (params) => {
    const search = queryString.stringify(
      {
        ...router.query,
        ...params,
      },
      { arrayFormat: "bracket" }
    );
    router.push({ search });
  };

  return { updateQuery };
}

export default usePageRouting;
