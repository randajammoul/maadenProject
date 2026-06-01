import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import useWindowSize from "../../../hooks/useWindowSize";
import { getRightContent } from "../../../ts/util";
import styles from "./AtAGlance.module.css";
import iconCard from "./images/Layer 1 (14).svg";
import CardYellowBackground from "../../../component/CardYellowBackground/CardYellowBackground";
import Count from "../../../component/Count/Count";
import HorizontalBar from "../../../component/HorizontalBar/HorizontalBar";
import CardWooden from "../../../component/CardWooden/CardWooden";
import imageWooden from "./images/woodImage.png";
import HoverCard from "../../../component/HoverCard/HoverCard";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
const Pagecontent = content.pages.overveiw.ATAclance;
const  imagesHoverCard = [ image1,image2,image3,image4]
const AtAGlance = () =>{
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
     const windowWidth = useWindowSize();
    return(<> 
        <div>
          {windowWidth < 1280 && (
              <div className="container horizontal-padding">
                <Paragraph fontClassName="headline" classNames="color-yellow">
                  {getRightContent(
                    rtlLanguage,
                    content.pages.overveiw.tabLabelsText
                  )[0]}
                </Paragraph>
                
              </div>
              
            )}
      <div className="spacer-16"></div>
      
          <div className={styles.cardYellow}>
             <div className="spacer-64"></div>
            <div className="container horizontal-padding">
              <div className={styles.contaniercard}>

                {Pagecontent.cardYellowBackground.map((item, index) => {
                  return (<div>
                        <CardYellowBackground
                          key={index}
                          texts={getRightContent(rtlLanguage, item.topText)}
                          icon={iconCard}
                          />

                     <div className="spacer-16"></div>

                     <Count
                      countValue={item.countValue}
                      decimalCount={item.decimals}
                      countSpanLeft={getRightContent(rtlLanguage, item.prefix)}
                      countSpan={getRightContent(rtlLanguage, item.suffix)}
                      textImg={getRightContent(rtlLanguage,item.topCount)}
                      classUnderText=""
                      classTextImg="uppercase"
                     />

                     <div className="spacer-16"></div>
                      <Paragraph
                            fontClassName="bold body-m"
                            classNames={[
                              "green-brand uppercase",
                              getRightContent(rtlLanguage, item.textsubtitle) === " " ? styles.invisible : "",
                            ].join(" ")}
                          >
                            {getRightContent(rtlLanguage, item.textsubtitle) === " " ? "noText"  : getRightContent(rtlLanguage, item.textsubtitle)}
                        </Paragraph>

                    <div className="spacer-16"></div>
                      <HorizontalBar data={Pagecontent.barCharsData[index]} />
                    
                    
                  </div>
                  
                  );
                })}
              </div>
             <div>
                <Paragraph fontClassName="body-ss" classNames="green-brand">
                    {getRightContent(rtlLanguage,Pagecontent.lastText)}
                </Paragraph>
             </div>
             <div className="spacer-32"></div>
            </div>
          </div>
           <div className="spacer-16"></div>

          <div className="container horizontal-padding">

           <CardWooden
            image={imageWooden}
            title ={getRightContent(rtlLanguage,Pagecontent.Cardwooden.title)}
            data={getRightContent(rtlLanguage,Pagecontent.Cardwooden.content)}
            />
       

           <div className="spacer-64"></div>
            
           <div >
            <div className={styles.cardsContainer}>
              
            {
              Pagecontent.HoverCardImage.content.map((datahover,index)=>{
                return(<>
              
                    <HoverCard
                      key={index}
                      cardIndex={index}
                      data={datahover}
                      image={imagesHoverCard[index]}
                  />
                </>)
              })
            }
          </div>
           </div>
        </div>
           <div className="spacer-64"></div>

        </div>
    </>)
}
export default AtAGlance;