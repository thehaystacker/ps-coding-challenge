import Head from "next/head";
import { useEffect } from "react";
import { connect } from "react-redux";
import { wrapper } from "../store";
import { fetchLaunches, getLaunchesAction } from "../store/home/actions";
import { getLaunchesSuccessAction } from "../store/home/actionTypes";
import HomeListing from "../pages/home/listing";
import Link from "next/link";

function Home(props) {
  const {
    props: { response },
  } = props;

  useEffect(() => {
    props.getLaunchesSuccess(response);
  }, []);

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>SpaceX Launch Program || Home</title>
      </Head>

      <HomeListing />
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  console.log(`[query]`, query);

  const response = await fetchLaunches();
  return { props: { response } };
};

const mapDispatchToAction = (dispatch) => {
  return {
    getLaunchesSuccess: (data) => dispatch(getLaunchesSuccessAction(data)),
  };
};

export default connect(null, mapDispatchToAction)(Home);
