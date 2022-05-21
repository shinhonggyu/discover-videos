import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";
import SectionCards from "../components/card/section-cards";
import { getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  // const popularVideos = await getVideos("disney trailer");
  return {
    props: {
      disneyVideos,
      productivityVideos,
      travelVideos,
    },
  };
}

const Home = ({ disneyVideos, productivityVideos, travelVideos }) => {
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
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={disneyVideos} size="small" />
      </div>
    </div>
  );
};

export default Home;
