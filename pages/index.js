import Head from "next/head";

import HomePageComp from "../components/HomePageComp";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Random User Pagination App</title>
        <meta name="description" content="Home page of a basic Nextjs fullstack application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageComp />
    </>
  );
}
