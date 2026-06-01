import styles from "./CardExploration.module.css";
import icon from "../../pages/StrategicReview/Exploration/images/gold.svg";
import Paragraph from "../Paragraph/Paragraph";
 interface props {
     topTitle:string,
     middleTitle:string,
     list:string[][]

 }
const CardExploration = ({topTitle, middleTitle,list}:props)=>{
    return(<>
         <div className={styles.cardGray}>
               <div className={styles.TopCard}>
                <Paragraph fontClassName="body-l" classNames="white bold">
                     {topTitle}
                </Paragraph>
               </div>
               <div className={styles.middelCard}>
                 <span>
                    <img src={icon}/>
                 </span>
                 <span>
                  <Paragraph fontClassName="body-l" classNames="white bold ">
                    {middleTitle}
                </Paragraph>
                 </span>
               </div>
               <div className={styles.bodyCard}>
                <ul>
                    {
                     list.map((e)=>{
                     return(<>
                        <li >
                        <Paragraph fontClassName="body-l" classNames="text-gray">
                           {e}
                       </Paragraph>
                    </li>
                            </>)
                        })
                    }
                  
                </ul>
               </div>

            </div>
    </>)
}
export default CardExploration;