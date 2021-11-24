import Head from "next/head";
import loadable from "@loadable/component";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import Hero from "../components/Hero";
import Blocks from "../components/Blocks";
import Mission from "../components/Mission";
import CallToAction from "../components/CallToAction";
import Link from "next/link";
import Button from "../components/Button";
import Treatments from "../components/Treatments";
import Layout from "../components/Layout";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
import special from "../images/new-patient-horizontal.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

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
        menuItems(where: { location: PRIMARY, parentId: "null" }) {
          nodes {
            path
            label
            id
            childItems {
              nodes {
                id
                path
                label
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      home: await result.data.pageBy,
      menuItems: await result.data.menuItems.nodes,
    },
  };
}

export default function Home({ home, menuItems }) {
  return (
    <>
      <Head>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.metaDesc} />
      </Head>
      <Layout menuItems={menuItems}>
        <Hero home={home} />
        <CallToAction />
        <Mission />
        <Treatments />
        <Blocks />
      </Layout>
    </>
  );
}
