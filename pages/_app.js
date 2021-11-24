import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/inter/variable.css";

import "../styles/reset.css";
import "../styles/swiper.custom.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/plans.css";

// register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    await navigator.serviceWorker.register("./sw.js");
  });
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
