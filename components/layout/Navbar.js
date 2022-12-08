import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.navbar__link__container}>
        <Link
          className={styles.navbar__link}
          //   className={(navData) =>
          //     navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`
          //   }
          href="/"
        >
          Home
        </Link>
      </span>
      <span className={styles.navbar__link__container}>
        <Link
          className={styles.navbar__link}
          //   className={(navData) =>
          //     navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`
          //   }
          href="/users"
        >
          Users
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
