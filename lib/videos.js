import videoData from "../data/videos.json";

export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=25&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();

  console.log(data.items);

  return data.items.map((item) => {
    return {
      imgUrl: item?.snippet?.thumbnails?.high?.url,
      title: item?.snippet?.title,
      id: item?.id?.videoId,
    };
  });
};
