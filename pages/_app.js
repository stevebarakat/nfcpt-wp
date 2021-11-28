import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import Head from "next/head";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/inter/variable.css";
import "../styles/reset.css";
import "../styles/swiper.custom.css";
import "../styles/variables.css";
import "../styles/plans.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
