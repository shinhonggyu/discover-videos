import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="honggyu@gmail.com" />
      <Banner
        title="Clifford the Big Red Dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <SectionCards title="Disney" />

      <Card size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  );
};

export default Home;
