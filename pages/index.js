import Head from "next/head";
import { connect } from "react-redux";
import { getLaunchesAction } from "../store/home/actions";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await getLaunchesAction();
  return { props: { response } };
};

function Home(props) {
  const { response } = props;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>SpaceX Launch Program || Home</title>
      </Head>

      <div className="wrap-cards">
        {response.map((rocket) => (
          <h4 key={rocket.flight_number}>{rocket.mission_name}</h4>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.home.name,
  };
};

export default connect(mapStateToProps)(Home);
