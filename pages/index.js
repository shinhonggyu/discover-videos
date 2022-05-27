import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/navbar/navbar";
import SectionCards from "../components/card/section-cards";
import { getVideos, getPopularVideos } from "../lib/videos";

// To fetch data at request time
// This function will be called by the server on every request
// Only if you need to render a page whose data must be fetched at request time
export async function getServerSideProps(context) {
  console.log("getServerSideProps");
  // const disneyVideos = await getVideos("disney trailer");
  // const productivityVideos = await getVideos("productivity");
  // const travelVideos = await getVideos("travel");
  // const USpopularVideos = await getPopularVideos("US");
  // const KRpopularVideos = await getPopularVideos("KR");
  return {
    props: {
      // disneyVideos,
      // productivityVideos,
      // travelVideos,
      // USpopularVideos,
      // KRpopularVideos,
    },
  };
}

const Home = ({
  disneyVideos,
  productivityVideos,
  travelVideos,
  USpopularVideos,
  KRpopularVideos,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar username="zowoz8819@gmail.com" />
        <Banner
          videoId="4zH5iYM4wJo"
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
          <SectionCards title="Popular" videos={USpopularVideos} size="small" />
          <SectionCards title="인기" videos={KRpopularVideos} size="small" />
        </div>
      </div>
    </div>
  );
};

export default Home;
