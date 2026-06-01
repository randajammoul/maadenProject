import Count from "../Count/Count";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardLeader.module.css";
interface Props{
    color:string,
    topText:string[],
    countValue :number,
    countspan ?:string,
    bottomText:string[],
    decimals?:number,
    countSpanLeft?:string,

}
const CardLeader = ({color,topText,countValue,countspan,bottomText,decimals,countSpanLeft}:Props) =>{
    return (
        <>
        <div 
        className={styles.cardContainer}
         style={{backgroundColor:color}}>
            <div>
                <Paragraph fontClassName="subheading" classNames="white">
                  {topText}
                </Paragraph>
            </div>

            <div>
                <div>
                    <Count
                    countValue={countValue}
                    classColor="white"
                    countSpan={countspan}
                    // classCountSpan="h3 bold"
                    decimalCount ={decimals}
                    countSpanLeft={countSpanLeft}
                    />
                     <Paragraph fontClassName="body-l"  classNames="white">
                      {bottomText}
                   </Paragraph>
                </div>

            </div>
         
               
        </div>
        </>
    )
}
export default CardLeader ;