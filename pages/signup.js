import Head from "next/head";
import styles from "../styles/Home.module.css";
import Signup from "../components/Signup";

export default function signup_page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup</title>
      </Head>
      <Signup />
    </div>
  );
}
