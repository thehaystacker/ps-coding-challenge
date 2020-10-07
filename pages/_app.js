import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import "../styles/globals.scss";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
