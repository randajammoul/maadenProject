import content from "../../content/content";
import facebookIcon from "./images/social/facebook.svg";
import instagramIcon from "./images/social/instagram.svg";
import linkedinIcon from "./images/social/linkedin.svg";
import twitterIcon from "./images/social/twitter.svg";
import youtubeIcon from "./images/social/youtube.svg";
import irIcon from "./images/social/ir.svg";
import styles from "./SocialIcons.module.css";
import useAppStore from "../../store";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";
import useWindowSize from "../../hooks/useWindowSize";

const socialIcons = [
  irIcon,
  facebookIcon,
  twitterIcon,
  youtubeIcon,
  linkedinIcon,
  instagramIcon,
];

export default function SocialIcons() {
  const { toggleIR, rtlLanguage } = useAppStore();
  const { ref, inView } = useInView();
  const windowWidth = useWindowSize()
  const smallDevice = windowWidth < 1024;
  return (
    <div
      className={styles.wrapper}
      ref={ref}
      style={getVisibleSensorAnimation(
        inView,
        `${smallDevice ? "fade-in-40px" : `move-from-${rtlLanguage ? "right" : "left"}`} 0.9s ${smallDevice ? "0.4s" : "1.7s"} backwards`
      )}
    >
      {content.general.socialIcons.map(
        (icon: { link?: string; modal?: boolean }, index: number) =>
          icon.modal ? (
           
            <div className={styles.iconWrapper} onClick={() => toggleIR()}>
              <img src={socialIcons[index]} alt="" className={styles.icon} />
            </div>
          ) :
           (
            <a
              key={index}
              href={icon.link}
              rel="noopener noreferrer"
              target={"_blank"}
              // className={styles.iconWrapper}
            >
              <img
                src={socialIcons[index]}
                alt=""
                className={[styles.icon].join(" ")}
              />
            </a>
          )
      )}
    </div>
  );
}
