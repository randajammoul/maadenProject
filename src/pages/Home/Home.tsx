import styles from "./Home.module.css";
import Paragraph from "../../component/Paragraph/Paragraph";
import content from "../../content/content";
import useAppStore from "../../store";
import {getRightContent, getVisibleSensorAnimation } from "../../ts/util";
import useWindowSize from "../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import Carouselmage from "../../component/CaruselImage/CarouselImage";
const pageContent= content.pages.home;

const Home = ()=> {
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    const windowWidth = useWindowSize();
    const [ref,InView] = useInView();
    return(<>
     <div className={styles.container}>

<div className="spacer-80"></div>

 <div className="spacer-8"></div>
  <div className={styles.titleHome} >
     <div className={styles.titleContainer}>
      <div ref={ref}>
          <Paragraph style={getVisibleSensorAnimation(InView,"fade-in-40px 0.8s backwards")}
                   fontClassName={`bold ${windowWidth < 1280 ? "h2" : "h3"}`}
                     classNames="white uppercase">
              {getRightContent(rtlLanguage,pageContent.title1)}
          </Paragraph> 
      </div>
      <div ref={ref}>
          <Paragraph style={getVisibleSensorAnimation(InView,"fade-in-40px 0.8s 0.3s backwards")}
                     fontClassName={`bold ${windowWidth < 1280 ? "h3" : "h2"}`}
                     classNames=" white uppercase">
              {getRightContent(rtlLanguage,pageContent.title2)}
          </Paragraph> 
      </div>
     </div>
      <div ref={ref}>
          <Paragraph style={getVisibleSensorAnimation(InView,"fade-in-40px 0.8s 0.5s backwards")}
                    fontClassName={windowWidth > 1023 ? "h4" : "subheading"}
                     classNames="normal white uppercase">
              {getRightContent(rtlLanguage,pageContent.annualReport)}
          </Paragraph> 
      </div>
  </div>
 

 <div className="spacer-8"></div>
  <div  ref={ref} style={getVisibleSensorAnimation(InView,"fade-in-40px 0.8s 0.8s backwards")}
    className={styles.carouselContainer}>
      <Carouselmage/>
  </div>
  <div className="spacer-8"></div>
</div>

 
    </>)
}
export default Home;