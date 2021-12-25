import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "../components/Login";

export default function login_page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </div>
  );
}
