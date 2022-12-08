import React from "react";

import Link from "next/link";

import styles from "./HomePageComp.module.css";

function HomePageComp() {
  return (
    <>
      <section className={styles.homepage__section}>
        <h2>This is a basic fullstack NextJs app that fetches users data from a NoSql database</h2>
        <Link href="/new-user">Some New user Route</Link>
      </section>
    </>
  );
}

export default HomePageComp;
