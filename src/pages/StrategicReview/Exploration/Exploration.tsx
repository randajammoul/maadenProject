
import CardExploration from "../../../component/CardExploration/CardExploration";
import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
 import useAppStore from "../../../store";
 import { getRightContent ,getVisibleSensorAnimation } from "../../../ts/util";
//  import { type ReactNode } from "react";
import cardIcon1 from "./images/card-icon-1.svg";
import cardIcon2 from "./images/card-icon-2.svg";
import cardIcon3 from "./images/card-icon-3.svg";
import cardIcon4 from "./images/card-icon-4.svg";
import cardIcon4Ar from "./images/card-icon-4-ar.svg";
import cardIcon5 from "./images/card-icon-5.svg";
import styles from "./Exploration.module.css";
import map from "./images/map.jpg";
import { useInView } from "react-intersection-observer";
const pageContent = content.pages.StrategicReview.exploration;

const Exploration = () =>{
     const rtlLanguage = useAppStore((state) => state.rtlLanguage);
     const { ref, inView } = useInView( ); 
    const cardIcons = [
    cardIcon1,
    cardIcon2,
    cardIcon3,
    rtlLanguage ? cardIcon4Ar : cardIcon4,
    cardIcon5,
  ];                 
                        
                           
    return (<>
            <div className="container horizontal-padding">
              <div className="spacer-32"></div>
                <Paragraph fontClassName="headline" classNames="color-yellow bold">
                      {getRightContent(rtlLanguage,pageContent.title1)} 
                </Paragraph>
               <div className="spacer-8"></div>
                <Paragraph fontClassName="body-l" classNames="color-yellow" >
                    {getRightContent(rtlLanguage,pageContent.paragraph1)}
                </Paragraph>
             <div className="spacer-32"></div>
             <Paragraph fontClassName="headline" classNames="color-yellow bold">
                      {getRightContent(rtlLanguage,pageContent.title2)} 
            </Paragraph>
            <div className={styles.containerImage}>
                <img 
                ref={ref} style={getVisibleSensorAnimation(inView,"scale-from-center 2s  backwards")}
                  className={styles.imageMap} src={map} alt="map"/>
            </div>
             <div className="spacer-32"></div>
                <div className={styles.cardZone}>
                  {
                    pageContent.cards.map((itemCards,index)=>{
                      return(<>
                      <div key={index}>
                         <CardExploration 
                         topTitle={getRightContent(rtlLanguage,itemCards.zone)} 
                         middleTitle= {getRightContent(rtlLanguage,itemCards.title)}
                         list={getRightContent(rtlLanguage,itemCards.list)}
                           />
                      
                      </div>
                        

                        </>)
                    })
                  }
                </div>
                 <div className="spacer-32"></div>
                 
                   <div className={styles.cardText}>
                    {
                      pageContent.cardsLegend.map((e,index)=>{
                        return(<>
                               <div className={styles.containercard}>

                                          <img src={cardIcons[index]} alt="icon"/>
                                           <Paragraph fontClassName="subheading" classNames="green-brand">
                                               {getRightContent(rtlLanguage,e.text)}
                                           </Paragraph>
                                             
                                
                                </div>
                                <div className="spacer-16"></div>
                            </>)
                            
                      })
                      
                    }
                   
                   </div>
                 
                    <div className="spacer-64"></div>
            </div>
    </>)
}
export default Exploration ;