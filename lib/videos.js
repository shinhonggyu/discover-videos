// import videoData from "../data/videos.json";

const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "https://www.googleapis.com/youtube/v3";

    const response = await fetch(
      `${BASE_URL}/${url}&part=snippet&maxResults=25&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet?.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = async (searchQuery) => {
  console.log("getVideos");
  const URL = `search?q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
};

export const getPopularVideos = async (regionCode) => {
  const URL = `videos?chart=mostPopular&regionCode=${regionCode}`;
  return getCommonVideos(URL);
};
