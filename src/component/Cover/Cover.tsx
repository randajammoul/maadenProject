
import styles from "./Cover.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import Paragraph from "../Paragraph/Paragraph";

interface CoverProps {
  title: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const Cover: React.FC<CoverProps> = ({ title, images }) => {
  const windowWidth = useWindowSize();

  let backgroundImage = images.desktop;
  if (windowWidth < 768) {
    backgroundImage = images.mobile;
  } else if (windowWidth < 1024) {
    backgroundImage = images.tablet;
  }

  return (
   <div
          className={styles.cover}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.coverShine}></div> {/* الشعاع */}
          <div className={`container horizontal-padding ${styles.textContainer}`}>
            <Paragraph
              fontClassName={windowWidth < 700 ? "h3" : "h1"}
              classNames="uppercase white bold"
            >
              {title}
            </Paragraph>
          </div>
        </div>

  );
};

export default Cover;
