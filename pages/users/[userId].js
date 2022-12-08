import Link from "next/link";

import { MongoClient } from "mongodb";
import Head from "next/head";

import User from "../../components/User";

function UserDetailsPage(props) {
  return (
    <>
      <Head>
        <title>{props.userData.name}</title>
        <meta name="description" content="This user's profile" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <User
          id={props.userData.id}
          name={props.userData.name}
          email={props.userData.email}
          image={props.userData.image}
        />
        <Link href="/users" style={{ color: "green", textDecoration: "none", fontWeight: "bold" }}>
          Go Back
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://eldirecto:eldirecto@cluster0.b6hjz.mongodb.net/nextjsusersDB?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const users = await usersCollection.find({}, { name: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking", //best for production(on vercel)
    // fallback: false,
    paths: users.map((user) => ({ params: { userId: user.name } })),
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;

  const client = await MongoClient.connect(
    "mongodb+srv://eldirecto:eldirecto@cluster0.b6hjz.mongodb.net/nextjsusersDB?retryWrites=true&w=majority"
  );

  const db = client.db();

  const usersCollection = db.collection("users");

  const selectedUser = await usersCollection.findOne({ name: userId });

  client.close();

  return {
    props: {
      userData: {
        id: selectedUser._id.toString(),
        name: selectedUser.name,
        email: selectedUser.email,
        image: selectedUser.image,
      },
    },
  };
}

export default UserDetailsPage;
