import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./User.module.css";

function User(props) {
  const router = useRouter();

  return (
    <div className={styles.user}>
      <div className={styles.user__image__container}>
        <img className={styles.user__image} src={props.image} alt="User" />
      </div>
      <div className={styles.user__details__container}>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <div>{router.pathname === "/users" && <Link href={`/users/${props.name}`}>View Profile</Link>}</div>
      </div>
    </div>
  );
}

export default User;
