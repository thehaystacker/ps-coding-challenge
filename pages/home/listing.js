import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Nodata from "../../components/nodata/nodata";

import Filters from "./filters";
import Loader from "./loader";
import styles from "./style.module.scss";

function HomeListing(props) {
  return (
    <div className="">
      <div className="main-head">
        <h2>SpaceEx Launch Programs</h2>
      </div>

      <div className={styles.wraplist}>
        <Filters />

        {props.getLaunchesLoading ? (
          <Loader />
        ) : (
          <div className={styles.gridcards}>
            {props.getLaunchesData?.length ? (
              <div className={styles.wrapcards}>
                {props.getLaunchesData.map((rocket) => (
                  <div className={styles.pscard} key={rocket.flight_number}>
                    <div className={["ps-card", styles.card].join(" ")}>
                      <div className={styles.wrapimg}>
                        <img
                          src={rocket.links.mission_patch}
                          alt={`#${rocket.flight_number}`}
                        />
                      </div>
                      {rocket?.mission_name ? (
                        <div className={styles.meta}>
                          <h5 className="txt-blue">
                            <span>{rocket.mission_name}</span>
                            {rocket?.flight_number ? (
                              <span className="mar-l-5">
                                #{rocket.flight_number}
                              </span>
                            ) : null}
                          </h5>
                        </div>
                      ) : null}

                      {rocket?.mission_id?.length ? (
                        <div className={styles.meta}>
                          <h5>Mission Ids:</h5>
                          <ul>
                            {rocket.mission_id.map((id, k) => (
                              <li key={k} className="txt-blue">
                                {id}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {rocket?.launch_year ? (
                        <div className={styles.meta}>
                          <h5>
                            <span>Launch Year:</span>
                            <span className="txt-blue mar-l-5">
                              {rocket.launch_year}
                            </span>
                          </h5>
                        </div>
                      ) : null}

                      <div className={styles.meta}>
                        <h5>
                          <span>Successful Launch:</span>
                          <span className="txt-blue mar-l-5">
                            {rocket.launch_success ? "Yes" : "No"}
                          </span>
                        </h5>
                      </div>

                      <div className={styles.meta}>
                        <h5>
                          <span>Successful Landing:</span>
                          <span className="txt-blue mar-l-5">
                            {rocket?.rocket?.first_stage.cores[0].land_success
                              ? "Yes"
                              : "No"}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Nodata />
            )}
          </div>
        )}
      </div>

      <div className={styles.devid}>
        <h4>
          Developed by: <span className="mar-l-5">Sangeeth</span>
        </h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getLaunchesData: state.home.getLaunchesData,
    getLaunchesLoading: state.home.getLaunchesLoading,
  };
};

export default connect(mapStateToProps)(HomeListing);
