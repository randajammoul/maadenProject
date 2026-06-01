import styles from "./InvestmentCase.module.css";
import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getRightContent ,getVisibleSensorAnimation} from "../../../ts/util";
import { useInView } from "react-intersection-observer";
import icon1 from "../images/InvestmentCase/card-icon-1.svg";
import icon2 from "../images/InvestmentCase/card-icon-2.svg";
import icon3 from "../images/InvestmentCase/card-icon-3.svg";
const pageContent= content.pages.StrategicReview.investmentCase;
const iconarary=[icon1,icon2,icon3]
const InvestmentCase = () =>{
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    return (<>
         <div className={rtlLanguage ? styles.backgroundAr :styles.background}>
           <div className="container horizontal-padding">
            <div className="spacer-64"></div>
               <div>
                 <Paragraph  fontClassName="h3" classNames="bold white">
                        {getRightContent(rtlLanguage,pageContent.title1)}
                </Paragraph>
                 <div className="spacer-32"></div>
                   <Paragraph  fontClassName="h3" classNames="white">
                        {getRightContent(rtlLanguage,pageContent.pharagraph1)}
                </Paragraph>
                    <div className="spacer-32"></div>
                    
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
                               <Paragraph fontClassName="body-l" classNames="white bold uppercase">
                                {getRightContent(rtlLanguage,item.title)} 
                             </Paragraph>
                           </div>
                          <div>
                               <img ref={ref} style={getVisibleSensorAnimation(inView,"scale-from-center 1s 0.2s backwards")} src={iconarary[index]}/>
                          </div>
                      </div>
                       <div className={styles.bottomCard} >
                            
                             
                              {getRightContent(rtlLanguage,item.paragraphs).map(
                            (p: string, pIndex: number) => (
                            <div
                                key={pIndex}
                        
                                    className={styles.lineParagraphContainer}
                                    >
                                        <div
                                        className={styles.line}
                                        style={{ backgroundColor:item.background}}
                                        >
                                        </div>
                                       <div className="spacer-8"></div>
                                    <Paragraph fontClassName="body-m">{p}</Paragraph>
                                    <div className="spacer-8"></div>
                              </div>
                            )
                        )}
                            </div>
                     </div>
                       
                           </>)
                      })
                     }
                 </div>
               </div>
                 <div className="spacer-64"></div>
               </div>
           </div>
    </>)
}
export default InvestmentCase;