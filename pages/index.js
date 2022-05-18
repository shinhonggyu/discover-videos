import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix</h1>

      {/* <Navbar /> */}
      <Banner />
      {/* <Card /> */}
    </div>
  );
};

export default Home;
