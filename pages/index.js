import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Mission from "../components/Mission";
// import Treatments from "../components/Treatments";
// import Blocks from "../components/Blocks";
// import CallToAction from "../components/CallToAction";
const CallToAction = loadable(() => import("./CallToAction"));
const Mission = loadable(() => import("./Mission"));
const Treatments = loadable(() => import("./Treatments"));
const Blocks = loadable(() => import("./Blocks"));

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetHomepage {
        pageBy(uri: "homepage") {
          title
          featuredImage {
            node {
              slug
              title
              caption
              sourceUrl
              altText
            }
          }
          seo {
            metaDesc
            title
          }
        }
      }
    `,
  });
  return {
    props: {
      home: await result.data.pageBy,
    },
  };
}

export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.metaDesc} />
      </Head>
      <Layout>
        <Hero home={home} />
        <CallToAction />
        <Mission />
        <Treatments />
        <Blocks />
      </Layout>
    </>
  );
}
