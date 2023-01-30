import React from "react";
import Head from "next/head";

function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Page does not exist!" />
      </Head>
      <h2 style={{ textAlign: "center" }}>Ooops! Page not found!</h2>
    </>
  );
}

export default NotFoundPage;
