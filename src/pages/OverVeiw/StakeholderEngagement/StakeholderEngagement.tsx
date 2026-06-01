
import React, { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import CircleSvg from "../../../component/CircleSvg/CircleSvg";
import Paragraph from "../../../component/Paragraph/Paragraph";
import { getRightContent, getVisibleSensorAnimation } from "../../../ts/util";
import CardLine from "./CardLine";
import styles from "./StakeholderEngagement.module.css";
import content from "../../../content/content";
import useAppStore from "../../../store";
import CircleSvgArabic from "../../../component/CircleSvg/CircleSvgArabic";

type Item = {
  id: string;
  titleTop: string[];
  titleBottom: string[];
  text: string[];
  colorline: string;
};

const pageContent= content.pages.overveiw.Stakeholder.content;
const CardItem: React.FC<{
  item: Item;
  rtlLanguage: boolean;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}> = ({ item, rtlLanguage, hoveredId, setHoveredId }) => {
  // 🟢 لا نستخدم triggerOnce: true حتى يتفاعل كل مرة
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isActive = hoveredId === item.id;
  
  // 🟢 نعيد تشغيل الأنيميشن كل مرة يتغير hoveredId (يعني السهم يدخل من جديد)
  const animationStyle = getVisibleSensorAnimation(
    isActive,
    "move-from-left 0.6s ease-in"
  );

  return (
    <div
      key={item.id}
      className={[styles.cardStakeholder, isActive ? styles.activeCard : ""].join(" ")}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onFocus={() => setHoveredId(item.id)}   // keyboard accessibility
      onBlur={() => setHoveredId(null)}
      tabIndex={-1} // make focusable
      aria-describedby={`card-${item.id}`}
    >
      <Paragraph fontClassName="body-l" classNames="bold green-brand">
        <div>{getRightContent(rtlLanguage, item.titleTop)}</div>
        <div>{getRightContent(rtlLanguage, item.titleBottom)}</div>
      </Paragraph>
      {

      }
     <div className={styles.containerLiner} ref={ref}>
        {inView && (
          <CardLine
            // 🟢 السهم يُرسم فقط لما الكارد مفعّل → الأنيميشن تشتغل من جديد
            style={animationStyle}
            color={item.colorline}
          />
        )}
      </div>
       <div id={`card-${item.id}`}>
        <Paragraph  fontClassName="body-l" classNames="regular text-gray">
        {getRightContent(rtlLanguage, item.text)}
       </Paragraph>
       </div>
      
    </div>
  );
};

const StakeholderEngagement: React.FC = () => {
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  const [hoveredId, setHoveredId] = useState<string | null>("EMPLOYEES");


  const handlePartHover = useCallback((id: string | null) => {
    setHoveredId(id);
  }, []);

  return (
    <div className={styles.backgroundPage}>
      <div className="spacer-64" />

      <div className={["container horizontal-padding", styles.containerStakeholder].join(" ")}>
        
        <div>
           {
            rtlLanguage ? <CircleSvgArabic className={styles.imageSvg} onPartHover={handlePartHover} activeId={hoveredId} />
            : <CircleSvg className={styles.imageSvg} onPartHover={handlePartHover} activeId={hoveredId} />
          }
  
        </div>
        
       
              <div className={styles.cardsWrapper}>
                {pageContent.map((item) => (
                  <>
                   <CardItem
                    key={item.id}
                    item={item}
                    rtlLanguage={rtlLanguage}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                  />
                  <div className="spacer-16" />
                </>
                
                  
                ))}
               
              </div>
           

      </div>

      <div className="spacer-64" />
    </div>
  );
};

export default StakeholderEngagement;
