
import { useInView } from "react-intersection-observer";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";
import { getDelayedIndexBasedAnimationTime, getRightContent, getVisibleSensorAnimation } from "../../ts/util";
import styles from "./HorizontalBar.module.css";

export interface IHorizontalBarData {
  percentage: number;
  backgroundColor: string;
  value:string;
  year: string[];
}
interface Props {
  data?: IHorizontalBarData[];
  active?:boolean;
}
export default function HorizontalBar({ data }: Props) {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  const {ref, inView: isVisible} = useInView()
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.barsContainer}>
        {data?.map((d, index) => (
     
              <div
                key={index}
                className={styles.barContainer}
                style={getVisibleSensorAnimation(
                  isVisible,
                  `fade-in-20px 0.4s ${
                    0.4 +
                    getDelayedIndexBasedAnimationTime(windowWidth, index, 0.15)
                  }s ease-in-out backwards`
                )}
              >
                {/* <div className={["font-size-18", styles.percentageContainer].join(" ")}>
                  {(rtlLanguage ? "%" : "") +
                    d.percentage +
                    (!rtlLanguage ? "%" : "")}
                </div> */}
                <div className={[styles.bar,index === 0 ? styles.active: " ", "body-m"].join(" ")} style={{ maxWidth:`${d.percentage}%`, backgroundColor: d.backgroundColor,...getVisibleSensorAnimation(
                  isVisible,
                  `move-from-${rtlLanguage ? "right":"left"} 0.9s ${
                    0.4 +
                    getDelayedIndexBasedAnimationTime(windowWidth, index, 0.25)
                  }s ease-in-out backwards`
                ) }}><span>{getRightContent(rtlLanguage, d.year)}</span><span>{d.value}</span></div>
              </div>
     
        ))}
      </div>
    </div>
  );
}
