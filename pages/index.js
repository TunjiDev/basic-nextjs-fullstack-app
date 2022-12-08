import Head from "next/head";
import { useRouter } from "next/router";

import HomePageComp from "../components/HomePageComp";

export default function HomePage() {
  // const router = useRouter();
  // console.log(router);
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
