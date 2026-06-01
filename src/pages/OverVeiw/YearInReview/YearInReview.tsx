import CardMonth from "../../../component/CardMonth/CardMonth";
import styles from "./YearInReview.module.css";
import content from "../../../content/content";
import { useEffect, useState} from "react";
import { getRightContent } from "../../../ts/util";
import useAppStore from "../../../store";
import useWindowSize from "../../../hooks/useWindowSize";
import Paragraph from "../../../component/Paragraph/Paragraph";
// import icon1 from "./images/january.svg";
// import image2 from "./images/februray.png";
// import image3 from "./images/march.png";
// import image4 from "./images/April.png";
// import icon4 from "./images/April_1 1.svg"
// import icon5 from "./images/May.svg";
// import image6 from "./images/june.png";
// import image7 from "./images/Augest.png";
// import icon8 from "./images/September.svg";
// import image11 from "./images/december.png";
import iconLeft from "../../../component/CardMonth/images/iconLeft.svg";
import iconRight from "../../../component/CardMonth/images/iconRight.svg";
// const imageMonth = [
//   [undefined, undefined, undefined, { type: "icon", src: icon1 }],
//   [undefined, { type: "image", src: image2 }],
//   [undefined, { type: "image", src: image3 }],
//   [{ type: "icon", src: icon4 }, { type: "image", src: image4 }],
//   [{ type: "icon", src: icon5 }],
//   [undefined, { type: "image", src: image6 }],
//   [{ type: "image", src: image7 }],
//   [{ type: "icon", src: icon8 }],
//   [],
//   [],
//   [undefined, undefined, { type: "image", src: image11 }],
// ] ;


const YearInReview = () =>{
   const windowWidth = useWindowSize();
    const PagrContent = content.pages.overveiw.YearInReview;
    const rtlLanguage = useAppStore((state) => state.rtlLanguage)
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [showTriangle, setShowTriangle] = useState(false);

  useEffect(() => {
  setShowTriangle(false);
  const timer = setTimeout(() => setShowTriangle(true), 20); 
  return () => clearTimeout(timer);
}, [currentMonthIndex]);

    return(<>
       {windowWidth < 1280 && (
              <div className="container horizontal-padding">
                <Paragraph fontClassName="headline" classNames="color-yellow">
                  {getRightContent(
                    rtlLanguage,
                    content.pages.overveiw.tabLabelsText
                  )[1]}
                </Paragraph>
                
              </div>
              
            )}
      <div className="spacer-16"></div> 
       <div className={styles.backgroundYear}>
        <div className="container horizontal-padding">
         <div className={styles.title}>
        <div onClick={() => setCurrentMonthIndex(prev => (prev === 0 ? PagrContent.month.length - 1 : prev - 1))}>
          <img  className={styles.imageDirection} src={rtlLanguage? iconLeft :iconRight} alt="icon" />
        </div>

        <div>
          <Paragraph
            fontClassName={windowWidth < 768 ? "h4 regular" : "h3"}
            classNames="white uppercase"
          >
           {getRightContent(rtlLanguage, PagrContent.month[currentMonthIndex].titleMonth)}
          </Paragraph>
        </div>

        <div onClick={() => setCurrentMonthIndex(prev => (prev === PagrContent.month.length - 1 ? 0 : prev + 1))}>
          <img src={rtlLanguage ? iconRight: iconLeft} alt="icon" />
        </div>

      <div className={`${styles.triangle} ${showTriangle ? styles.animate : ""}`}></div>

      </div>
         <CardMonth
            key={currentMonthIndex}
            dataMonth={PagrContent.month[currentMonthIndex].content}
            // photo={imageMonth[currentMonthIndex]}
         /> 
  
</div>

          <div className="spacer-64"></div>
       </div>
       
    </>)
}
export default YearInReview;