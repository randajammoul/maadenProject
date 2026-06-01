import content from "../../../content/content";
import styles from "./MaadenStrategy2040.module.css";
 import useAppStore from "../../../store";
 import { getRightContent, getVisibleSensorAnimation } from "../../../ts/util";
 import Paragraph from "../../../component/Paragraph/Paragraph";
import icon1 from "./images/icon-1.svg";
import icon2 from "./images/icon-2.svg";
import icon3 from "./images/icon-3.svg";
import icon4 from "./images/icon-4.svg";
import icon5 from "./images/icon-5.svg";
import { useInView } from "react-intersection-observer";
import StrategicTable from "../../../component/TabelData/TabelData";
 const pageContent = content.pages.StrategicReview.maaden2024;
 const iconArray =[icon1,icon2,icon3,icon4,icon5]
const MaagenStrategy2040 = () =>{
      const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    return (<>
            <div className="container horizontal-padding">
                <div className="spacer-32"></div>
                    <Paragraph fontClassName="headline" classNames="color-yellow">

                      {getRightContent(rtlLanguage,pageContent.paragraph1)} 
                    </Paragraph>
               <div className="spacer-32"></div>
                <Paragraph fontClassName="headline" classNames="color-yellow bold">

                      {getRightContent(rtlLanguage,pageContent.title2)} 
                </Paragraph>
                 <div className="spacer-16"></div>
                 <div className={styles.containerCard}>
                     {
                      pageContent.coloredCard.map((item,index)=>{
                          const { ref, inView } = useInView({
                        
                              threshold: 0.2, // متى تعتبر العنصر ظاهر
                            });
                        return(<>
                   <div key={index} className={styles.coloredCard}>
                        <div style={{background:item.background}} className={styles.topcard}>
                           <div>
                               <Paragraph fontClassName="body-l" classNames="white bold">
                                {getRightContent(rtlLanguage,item.title)} 
                             </Paragraph>
                           </div>
                          <div>
                               <img ref={ref} style={getVisibleSensorAnimation(inView,"scale-from-center 1s 0.2s backwards")} src={iconArray[index]}/>
                          </div>
                      </div>
                      <div className={styles.bottomCard} >
                             <div>
                               <Paragraph fontClassName="body-l" classNames="text-gray">
                                {getRightContent(rtlLanguage,item.text)} 
                             </Paragraph>
                             </div>
                      </div>
                   </div>
                           </>)
                      })
                     }
                 </div>
              <div className="spacer-64"></div>
                <Paragraph fontClassName="headline" classNames="color-yellow bold">

                      {getRightContent(rtlLanguage,pageContent.title3)} 
                </Paragraph>
                <div className="spacer-16"></div>
              <StrategicTable/>
                 <div className="spacer-64"></div>
            </div>
            
            </>)
}
export default MaagenStrategy2040;