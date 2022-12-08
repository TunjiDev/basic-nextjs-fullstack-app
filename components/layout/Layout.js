import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
