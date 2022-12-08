import { useState } from "react";

import { MongoClient } from "mongodb";

import Head from "next/head";

import usePaginate from "../../hooks/usePaginate";
import User from "../../components/User";
import styles from "../../components/Pagination.module.css";

function UsersPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [pageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const {
    renderPageNumbers,
    currentItems,
    pageIncrementBtn,
    pageDecrementBtn,
    nextPageClickHandler,
    prevPageClickHandler,
    pageNumbers,
  } = usePaginate(
    props.users,
    itemsPerPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    currentPage,
    pageNumberLimit,
    setCurrentPage,
    setMaxPageNumberLimit,
    setMinPageNumberLimit
  );

  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Check out our list of users here!" />
      </Head>

      <main className={styles.main}>
        {currentItems.map((user) => {
          return <User key={user.id} name={user.name} email={user.email} gender={user.gender} image={user.image} />;
        })}
        <ul className={styles.pageNumbers}>
          <li>
            <button onClick={prevPageClickHandler} disabled={currentPage === pageNumbers[0] ? true : false}>
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
            <button
              onClick={nextPageClickHandler}
              disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://eldirecto:eldirecto@cluster0.b6hjz.mongodb.net/nextjsusersDB?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const users = await usersCollection.find().toArray();

  client.close();

  return {
    props: {
      users: users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image,
      })),
    },
    revalidate: 10,
  };
}

export default UsersPage;
