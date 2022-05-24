import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
  const { videoId } = router.query;

  return (
    <div>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        overlayClassName={styles.overlay}
        onRequestClose={() => {
          router.back();
        }}
      >
        <div>Modal body</div>
      </Modal>
    </div>
  );
};

export default Video;
