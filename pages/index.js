import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

export default function home_page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
    </div>
  );
}
