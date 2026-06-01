import { type ReactNode } from "react";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardMonth.module.css";
import { getRightContent, getVisibleSensorAnimation } from "../../ts/util";
import useAppStore from "../../store";

interface ContentItem {
  title: string[];
  text: ReactNode[];
}
interface PhotoItem {
  type: "icon" | "image";
  src: string;
}

interface Props {
   dataMonth: ContentItem[];
   photo: (PhotoItem | undefined)[];
}



const CardMonth = ({ dataMonth,photo}: Props) => {
  const rtlLanguage = useAppStore ((state) => state.rtlLanguage);
  return (
    <div>
      

  <div className="spacer-64"></div>

<div className={styles.contanierMonth}>
   {dataMonth.map((item, idx) => (
  <div key={idx} className={styles.contentItem}>
    <Paragraph>{getRightContent(rtlLanguage, item.title)}</Paragraph>
    <Paragraph>{getRightContent(rtlLanguage, item.text)}</Paragraph>

    {/* الصورة/الأيقونة للكارد الحالي */}
    {photo?.[idx] && (
      <div
        style={getVisibleSensorAnimation(
          true,
          photo[idx].type === "icon"
            ? "fade-in-40px 0.9s ease-in-out backwards"
            : "scale-from-center 0.8s ease-in-out backwards"
        )}
        className={styles.imagesWrapper}
      >
        <img
          src={photo[idx].src}
          alt={`month-photo-${idx}`}
          className={styles.imagemonth}
        />
      </div>
    )}
  </div>
))}



</div>


    </div>
  );
};

export default CardMonth;
