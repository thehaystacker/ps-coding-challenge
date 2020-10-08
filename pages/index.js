import Head from "next/head";
import { useEffect } from "react";
import { connect } from "react-redux";
import { wrapper } from "../store";
import { fetchLaunches, getLaunchesAction } from "../store/home/actions";
import { getLaunchesSuccessAction } from "../store/home/actionTypes";

import styles from "../styles/Home.module.scss";

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    const response = await fetchLaunches();
    return { props: { response } };
  }
);

function Home(props) {
  const { response } = props;

  useEffect(() => {
    props.getLaunchesSuccess(props.response);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>SpaceX Launch Program || Home</title>
      </Head>

      <button type="button" onClick={props.getLaunches}>Update</button>

      {props.getLaunchesData ? (
        <div className="wrap-cards">
          {props.getLaunchesData.map((rocket) => (
            <div key={rocket.flight_number}>
              <h4>{rocket.mission_name}</h4>
              <img src={rocket.links.mission_patch} alt="mission-patch"/>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getLaunchesData: state.home.getLaunchesData,
  };
};

const mapDispatchToAction = (dispatch) => {
  return {
    getLaunchesSuccess: (data) => dispatch(getLaunchesSuccessAction(data)),
    getLaunches: () => dispatch(getLaunchesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Home);
