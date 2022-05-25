import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import cls from "classnames";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  const videoInfo = {
    title: "Hi cute dog",
    publishTime: "1990-01-01",
    description: "A big red dog that is super cute, can he get any bigger?",
    channelTitle: "Paramount Pictures",
    viewCount: 10000,
  };

  const { title, publishTime, description, channelTitle, viewCount } =
    videoInfo;

  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={() => router.back()}
      >
        <iframe
          allowFullScreen
          width="100%"
          height="360px"
          className={styles.videoPlayer}
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=1&rel=1&showinfo=0autohide=1`}
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
