import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./style.module.scss";
import Badge from "../../components/badge";
import { getLaunchesAction } from "../../store/home/actions";
import {
  getLaunchesLoadingAction,
  updateFilterLandSuccessAction,
  updateFilterLaunchSuccessAction,
  updateFilterLaunchyearAction,
} from "../../store/home/actionTypes";
import { withRouter } from "next/dist/client/router";
import { useRouter } from "next/router";
import usePageRouting from "../../hooks/usePageRouting";
import Link from "next/link";

function Filters(props) {
  const router = useRouter();
  const {
    query: { launch_year = "", launch_success = "", land_success = "" },
  } = router;
  const { updateQuery } = usePageRouting(router);

  useEffect(() => {
    props.updateFilterLaunchyear(launch_year);
    props.updateFilterLaunchSuccess(launch_success);
    props.updateFilterLandSuccess(land_success);
  }, []);

  const clearFilters = () => {
    props.updateFilterLaunchyear("");
    props.updateFilterLaunchSuccess("");
    props.updateFilterLandSuccess("");
  };

  const updateLaunchYear = (launch_year) => {
    props.getLaunchesLoading(true);
    props.updateFilterLaunchyear(launch_year);
    updateQuery({ launch_year });
  };

  const updateLaunchSuccess = (state) => {
    props.getLaunchesLoading(true);
    props.updateFilterLaunchSuccess(state);
    updateQuery({ launch_success: state });
  };

  const updateLandSuccess = (state) => {
    props.getLaunchesLoading(true);
    props.updateFilterLandSuccess(state);
    updateQuery({ land_success: state });
  };

  return (
    <div className={styles.gridfilter}>
      <div className="ps-card">
        <div className={styles.wrapfilters}>
          <h5 className="title mar-b-05">Filters</h5>

          <div className={styles.wrapfilters}>
            <p className={styles.title}>Launch Year</p>
            <div className={styles.badgelist}>
              {Array.from({ length: 15 }, (v, k) => 2006 + k).map(
                (launch_year) => (
                  <Badge
                    key={launch_year}
                    className={[
                      styles.badge,
                      "psbadge",
                      props.launch_year === launch_year ? "active" : "",
                    ].join(" ")}
                    onClick={() => updateLaunchYear(launch_year)}
                  >
                    {launch_year}
                  </Badge>
                )
              )}
            </div>
          </div>

          <div className={styles.wrapfilters}>
            <p className={styles.title}>Successful Launch</p>
            <div className={styles.badgelist}>
              <Badge
                className={[
                  styles.badge,
                  "psbadge",
                  props.launch_success === "true" ? "active" : "",
                ].join(" ")}
                onClick={() => updateLaunchSuccess("true")}
              >
                True
              </Badge>
              <Badge
                className={[
                  styles.badge,
                  "psbadge",
                  props.launch_success === "false" ? "active" : "",
                ].join(" ")}
                onClick={() => updateLaunchSuccess("false")}
              >
                False
              </Badge>
            </div>
          </div>

          <div className={styles.wrapfilters}>
            <p className={styles.title}>Successful Landing</p>
            <div className={styles.badgelist}>
              <Badge
                className={[
                  styles.badge,
                  "psbadge",
                  props.land_success === "true" ? "active" : "",
                ].join(" ")}
                onClick={() => updateLandSuccess("true")}
              >
                True
              </Badge>
              <Badge
                className={[
                  styles.badge,
                  "psbadge",
                  props.land_success === "false" ? "active" : "",
                ].join(" ")}
                onClick={() => updateLandSuccess("false")}
              >
                False
              </Badge>
            </div>
          </div>

          <div className="wrap-clear-filter">
            <Link href="/">
              <p onClick={clearFilters} className={styles.clearfilter}>
                Clear filters
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    launch_year: state.home.launch_year,
    launch_success: state.home.launch_success,
    land_success: state.home.land_success,
  };
};

const mapDispatchToAction = (dispatch) => {
  return {
    getLaunches: () => dispatch(getLaunchesAction()),
    getLaunchesLoading: (state) => dispatch(getLaunchesLoadingAction(state)),
    updateFilterLaunchyear: (year) =>
      dispatch(updateFilterLaunchyearAction(year)),
    updateFilterLaunchSuccess: (state) =>
      dispatch(updateFilterLaunchSuccessAction(state)),
    updateFilterLandSuccess: (year) =>
      dispatch(updateFilterLandSuccessAction(year)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToAction
)(withRouter(Filters));
