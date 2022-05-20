import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";
import SectionCards from "../components/card/section-cards";
import { getVideos } from "../lib/videos";

const Home = () => {
  const disneyVideos = getVideos();
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

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Product" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
};

export default Home;
