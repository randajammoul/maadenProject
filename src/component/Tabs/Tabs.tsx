import {  useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Tabs.module.css";

import useWindowSize from "../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import {
  getDelayedIndexBasedAnimationTime,
  getVisibleSensorAnimation,
} from "../../ts/util";

import useAppStore from "../../store";
import TabItem from "../TabItem/TabItem";
interface Props {
  labels: string[];
  contents : ReactNode[];
  contentClassNames?: string[];
  labelsText?: string[];
  noText?: boolean;
  // newDelayInSec?:number;
}

const Tabs = ({ labels, contents ,  labelsText = [], contentClassNames = [""], noText  }: Props) => {
  const { ref: refLabel, inView: isVisibleLabel } = useInView({triggerOnce:true});
  const { ref: refContent, inView: isVisibleContent } = useInView();
  // const {ref: refWrapper, inView:inViewWrapper} = useInView()
  const ref = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize();
  const {
    changePage,
    menuOpen,
    currentPage: { subMenuPageLevel1, mainPage },
  } = useAppStore();
  // const [activeTabIndex, setActiveTabIndex] = useState(subMenuPageLevel1);
  const [pressedFromInsideTabs, setPressedFromInsideTabs] = useState(false);

  const handleClicktab = (index: number) => {
    // setActiveTabIndex(index);
    changePage({ mainPage, subMenuPageLevel1: index });
    if (ref.current) {
      if (subMenuPageLevel1 === 0 && !pressedFromInsideTabs)
      {
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 150);
      }
      else {
        setTimeout(() => {
          ref?.current?.scrollIntoView({ behavior: "smooth" });
          
        }, 150);
      }
    }
  };

  useEffect(() => {
    handleClicktab(subMenuPageLevel1);
  }, [subMenuPageLevel1, mainPage]);

  const newDelayInSec = mainPage === 0 ? 0 : subMenuPageLevel1 === 0 ? 2 : 0;
  return (
    <div className={styles.wrapper} 
    // ref={refWrapper} 
    // style={getVisibleSensorAnimation(inViewWrapper, `fade-in-40px 0.3s ${newDelayInSec}s backwards`)}
    >
      <div ref={ref} className={styles.scrollMark}></div>
      <div
        className={[
          styles.labelContainer,
          menuOpen ? styles.hideTabs : "",
          styles[contentClassNames[subMenuPageLevel1]],
        ].join(" ")}
      >
        <div
          ref={refLabel}
          className={["container", styles.labelContainerWrapper, windowWidth > 1023 ? "horizontal-padding" :""].join(" ")}
        >
          {labels.map((label, index) => (
            <div
              style={getVisibleSensorAnimation(
                isVisibleLabel,
                `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                  windowWidth,
                  index
                )}s ease-in-out backwards`
              )}
              className={styles.labelWrapper}
              key={index}
              onClick={() => handleClicktab(index)}
            >
            
             <TabItem
                noText ={noText}
                active={index === subMenuPageLevel1}
                title ={label}
                text={labelsText[index]}
              />
              
            </div>
          ))}
        </div>
      </div>
      <div
        key={subMenuPageLevel1}
        className={[styles.contentContainer].join(" ")}
      >
        <div
          ref={refContent}
          style={getVisibleSensorAnimation(
            isVisibleContent,
            "fade-in 0.3s backwards"
          )}
          // style={getVisibleSensorAnimation(
          //   isVisible,
          //   `tab-content-enter${
          //     rtlLanguage ? "-reverse" : ""
          //   } 1s ease-in-out backwards`
          // )}
        >
          {contents[subMenuPageLevel1]}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
