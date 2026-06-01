
import { useInView } from "react-intersection-observer";

import { getVisibleSensorAnimation } from "../../ts/util";
import styles from "./Paragraph.module.css";

type ParagraphProps = {
  children: React.ReactNode;
  classNames?: string;
  style?: React.CSSProperties;
  fontClassName?: string;
  delay?: string;
   triggerOnce? :boolean
};

const Paragraph = ({
  children,
  classNames = "colorText",
  style = {},
  fontClassName = "body-l",
  delay = "0s",
   triggerOnce= false
}: ParagraphProps) => {
  const { ref, inView } = useInView({
    triggerOnce, // prevents retriggering when scrolling out/in
  });

  return (
    <div
      ref={ref}
      style={{
        ...getVisibleSensorAnimation(
          inView,
          `fade-in-40px 0.6s ${delay} ease-in-out backwards`
        ),
        ...style,
      }}
      className={[styles.wrapper, classNames, fontClassName]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default Paragraph;
