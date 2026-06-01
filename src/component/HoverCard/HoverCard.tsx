import styles from "./HoverCard.module.css";
import icon from "../../pages/OverVeiw/AtAGlance/images/54ط1 1.svg";
import Paragraph from "../Paragraph/Paragraph";
import Count from "../Count/Count";
import { getRightContent } from "../../ts/util";
import useAppStore from "../../store";

interface HoverCardProps {
  cardIndex: number; 
   image:string;
   data: {
    title: string[][];
    countvalue: number;
    suffix: string[];
    topText: string[];
    bottomText: string[];
    decimals: number;
    backgroundColor: string;
  };
}

const HoverCard = ({ data ,cardIndex,image }: HoverCardProps) => {
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);

  return (
    <div className={styles.card}>
 
      <div className={styles.imageWrapper}>
        <img className={styles.imagecard} src={image} alt="image" />

  
        <div
          className={styles.overlay}
          style={{ backgroundColor: data.backgroundColor }}
        >
        
          <div className={styles.topPart}>
            <div className={styles.texts}>
              {getRightContent(rtlLanguage, data.title).map(
                (line: string, idx: number) => (
                  <Paragraph
                    key={idx}
                    fontClassName="body-m bold"
                    classNames={cardIndex  === 2 ? "green-brand" : "white"}
                  >
                    {line}
                  </Paragraph>
                )
              )}
            </div>
      
            <div>
               {
                  cardIndex < 2 ? <img src={icon} alt="icon" className={styles.icon} /> : " "
               }
                  
            </div>
           
          </div>

        
          <div className={styles.countPart}>
            <Count
              countValue={data.countvalue}
              decimalCount={data.decimals}
              textImg={getRightContent(rtlLanguage, data.topText)}
              countSpan={getRightContent(rtlLanguage, data.suffix)}
              classTextImg="uppercase"
              underText={getRightContent(rtlLanguage, data.bottomText)}
              classUnderText="body-m white regular"
              classColor={cardIndex  === 2 ? "green-brand" : "white"}
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
