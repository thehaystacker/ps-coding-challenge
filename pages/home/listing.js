import React from "react";
import { connect } from "react-redux";
import Badge from "../../components/badge";
import styles from "./listing.module.scss";
// import "./style.scss";

function HomeListing(props) {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <div className="">
      <div className="main-head">
        <h3>SpaceEx Launch Programs</h3>
      </div>

      <div className={styles.wraplist}>
        <div className={styles.gridfilter}>
          <div className="ps-card">
            <div className={styles.wrapfilters}>
              <h5 className="title mar-b-05">Filters</h5>

              <div className={styles.wrapfilters}>
                <p className={styles.title}>Launch Year</p>
                <div className={styles.badgelist}>
                  {years.map((year) => (
                    <Badge
                      key={year}
                      className={[styles.badge, "psbadge"].join(" ")}
                    >
                      {year}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className={styles.wrapfilters}>
                <p className={styles.title}>Successful Launch</p>
                <div className={styles.badgelist}>
                  <Badge className={[styles.badge, "psbadge"].join(" ")}>
                    True
                  </Badge>
                  <Badge className={[styles.badge, "psbadge"].join(" ")}>
                    False
                  </Badge>
                </div>
              </div>

              <div className={styles.wrapfilters}>
                <p className={styles.title}>Successful Landing</p>
                <div className={styles.badgelist}>
                  <Badge className={[styles.badge, "psbadge"].join(" ")}>
                    True
                  </Badge>
                  <Badge className={[styles.badge, "psbadge"].join(" ")}>
                    False
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cards">
          {props.getLaunchesData ? (
            <div className={styles.wrapcards}>
              {props.getLaunchesData.map((rocket) => (
                <div className={styles.pscard} key={rocket.flight_number}>
                  <div className={["ps-card", styles.card].join(" ")}>
                    <div className={styles.wrapimg}>
                      <img
                        src={rocket.links.mission_patch}
                        alt="mission-patch"
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
                          {rocket.launch_success ? "true" : "false"}
                        </span>
                      </h5>
                    </div>

                    {rocket.launch_landing !== null ||
                    rocket.launch_landing !== undefined ? (
                      <div className={styles.meta}>
                        <h5>
                          <span>Successful Landing:</span>
                          <span className="txt-blue mar-l-5">
                            {rocket.launch_landing ? "true" : "false"}
                          </span>
                        </h5>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getLaunchesData: state.home.getLaunchesData,
  };
};

export default connect(mapStateToProps)(HomeListing);
