import videoData from "../data/videos.json";

export const getVideos = () => {
  return videoData.items.map((item) => {
    return {
      imgUrl: item?.snippet?.thumbnails?.high?.url,
      title: item?.snippet?.title,
      id: item?.id?.videoId,
    };
  });
};
