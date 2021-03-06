import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import "../scss/globals.scss";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
