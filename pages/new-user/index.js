import React from "react";

import Head from "next/head";

import NewuserPageComp from "../../components/NewuserPageComp";

function Newuserpage() {
  return (
    <>
      <Head>
        <title>New User!</title>
        <meta name="description" content="Some new users page for testing purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewuserPageComp />
    </>
  );
}

export default Newuserpage;
