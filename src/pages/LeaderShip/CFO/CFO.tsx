
import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
 import useAppStore from "../../../store";
 import iconUp from "./images/arrow-up.svg";
 import iconDown from "./images/arrow-down.svg";
 import { getRightContent } from "../../../ts/util";
 import { type ReactNode } from "react";
 import styles from "./CFO.module.css";
 import photoleader from "./images/leader.jpg";
 import photoleaderAR  from "./images/leader-ar.jpg"
 import Count from "../../../component/Count/Count";
 import CardYellowBackground from "../../../component/CardYellowBackground/CardYellowBackground";
 import HorizontalBar from "../../../component/HorizontalBar/HorizontalBar";
 import icon1 from "./images/singleTableIcons/icon-1.svg";
 import icon2 from "./images/singleTableIcons/icon-2.svg";
 import icon3 from "./images/singleTableIcons/icon-3.svg";
 import icon4 from "./images/singleTableIcons/icon-4.svg";
const pageContent = content.pages.Leadership.CFO;
const iconArray=[icon1,icon2,icon3,icon4]
const CFO = () => {
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    return(

    <div  className={[styles.pagecfo,"container horizontal-padding"].join(" ")}>
      
         <div className={styles.pharagraphContainer}>
          <div className="spacer-32"></div>
        <Paragraph fontClassName="body-l" classNames="green-brand uppercase bold"  >

            {getRightContent(rtlLanguage,pageContent.paragraph1)} 
        </Paragraph>

        <div className="spacer-32"></div>
        <Paragraph fontClassName="body-l" classNames="color-yellow"  >
            {getRightContent(rtlLanguage,pageContent.paragraph2)}
        </Paragraph>

          <div className="spacer-32"></div>
         <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title3)}
        </Paragraph>
        <div className="spacer-8"></div>
            <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph3).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
         <div className="spacer-32"></div>
         <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title4)}
        </Paragraph>
        <div className="spacer-8"></div>
            <div className={styles.card}>
                {
                    pageContent.cardcount.map((item,index)=>{
                        return(
                        <>
                        
                    <div className={styles.cardcontainer}>
                     <div className="spacer-8"></div>
                        <CardYellowBackground  
                          key={index}
                          texts={getRightContent(rtlLanguage, item.topText)}
                          icon={iconUp}
                          />
                        <div className="spacer-16"></div>

                            <Count
                            countValue={item.countValue}
                            decimalCount={item.decimals}
                            countSpanLeft={getRightContent(rtlLanguage, item.prefix)}
                            countSpan={getRightContent(rtlLanguage, item.suffix)}
                            underText={getRightContent(rtlLanguage,item.bottomText)}
                            classUnderText="green-brand headline"
                            classTextImg="uppercase"
                            />
                    </div>
                        </>)
                    })
                }
                    
            </div>
         <div className="spacer-32"></div>
           <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph4).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-s" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
        
         <div className="spacer-8"></div>
        <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title5)}
        </Paragraph>
          <div className="spacer-8"></div>
              <div className={styles.card}>
                {
                    pageContent.cardHoreziotal.map((item,index)=>{
                        return(
                        <>
                        
                    <div className={styles.cardcontainer}>
                     <div className="spacer-8"></div>
                        <CardYellowBackground  
                          key={index}
                          texts={getRightContent(rtlLanguage, item.topText)}
                          icon={iconDown}
                          />
                           <div className="spacer-32"></div>
                        <Paragraph fontClassName="subheading" classNames="green-brand">
                            {getRightContent(rtlLanguage,item.bottomText)}
                            </Paragraph>
                        <div className="spacer-16"></div>
                         <HorizontalBar data={pageContent.barCharsDataCfo[index]} />
                    </div>
                        </>)
                    })
                }
                    
            </div>
                <div className="spacer-32"></div>
           <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph5).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
        <div className="spacer-32"></div>
         <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title6)}
        </Paragraph>
        <div className="spacer-8"></div>
            <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph6).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
            <div className="spacer-32"></div>
         <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title7)}
        </Paragraph>
        <div className="spacer-8"></div>
            <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph7).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
         
        <div className="spacer-32"></div>
            <div className={styles.cardTitle}>
                 <Paragraph fontClassName="headline" classNames="white">
                    {getRightContent(rtlLanguage,pageContent.singleTable.title)}
                 </Paragraph>
            </div>
            <div className={styles.cardgray}>
                  {
                pageContent.singleTable.text.map((item,index)=>{
                    return(<>
                     <div className={styles.cardText}>
                        <div>
                            <img  src={iconArray[index]}/>
                        </div>
                        <div>
                             <Paragraph fontClassName="body-l" classNames="text-gray">
                                {getRightContent(rtlLanguage,item.title)}
                            </Paragraph>
                        </div>
                    </div>
                    </>)
                })
            }
            </div>
        
       
       

         <div className="spacer-32"></div>
         <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title8)}
        </Paragraph>
        <div className="spacer-8"></div>
            <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph8).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>

      
        <div className="spacer-64"></div>
        <div className={styles.lastParagraph}>
              <div className="spacer-32"></div>
            <Paragraph fontClassName="body-l" classNames="green-brand">
                {getRightContent(rtlLanguage,pageContent.paragraph9)}
            </Paragraph>
             <div className="spacer-32"></div>
        </div>
          <div className="spacer-64"></div>
         </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={ rtlLanguage? photoleaderAR : photoleader} alt="chairman"/>
            </div>
          
    </div>)
}
export default CFO ;