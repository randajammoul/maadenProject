import { useState } from "react";
import styles from "./TabItem.module.css";
import useWindowSize from "../../hooks/useWindowSize";
interface Props {
  active: boolean;
  title: string;
  text: string;
  noText?: boolean;
}

const TabItem = ({ title, text, noText, active }: Props) => {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;
  const windowWidth = useWindowSize ()
  return (
<div
  className={`${noText ? styles.noTextBase : styles.tabItem} ${
    isActive ? styles.active : ""
  }`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>

      {/* العنوان دايمًا بياخد كلاس خارجي جاهز */}
      <div
          className={`${windowWidth < 1280 ? "subheading" : "h4"} green-brand uppercase ${isActive ? "white" : ""}`}
        >
          {title}
        </div>

     
     {!noText && windowWidth >= 1280 && (
       <div className={`text-gray body-s ${isActive ? "white" : ""}`}>
          {text}
      </div>
)}
    </div>
  );
};

export default TabItem;
