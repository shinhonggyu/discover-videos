import styles from "./card.module.css";
import { useState } from "react";
import Image from "next/image";

const Card = (props) => {
  const { imgUrl = "/static/cliffor.webp", size = "medium" } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("handleOnError");
    setImgSrc("/static/clifford.webp");
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </div>
    </div>
  );
};

export default Card;
