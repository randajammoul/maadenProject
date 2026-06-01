import CardLeader from "../../../component/CardLeader/CardLeader";
import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
 import useAppStore from "../../../store";
 import { getRightContent } from "../../../ts/util";
 import { type ReactNode } from "react";
 import styles from "./Chairman.module.css";
 import photoleader from "./images/leader.jpg";
const pageContent = content.pages.Leadership.Chairman;
const Chairman= () => {
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    return(

    <div  className={[styles.pagechairman,"container horizontal-padding"].join(" ")}>
      
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
             <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph4).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
         
         <div className="spacer-32"></div>
          <Paragraph fontClassName="headline" classNames="color-yellow bold" >
            {getRightContent(rtlLanguage,pageContent.title5)}
        </Paragraph>
           <div className="spacer-8"></div>
             <div className="paragraph-container">
           {getRightContent(rtlLanguage, pageContent.paragraph5).map(
          (p: ReactNode, index: number) => (
            <Paragraph fontClassName="body-l" classNames="text-gray" key={index}>{p}</Paragraph>
          )
        )}
        </div>
           <div className="spacer-32"></div>
        <CardLeader
        color={pageContent.cardgreen1.backgroundColor}
        topText={getRightContent(rtlLanguage,pageContent.cardgreen1.toptext)}
        countValue={pageContent.cardgreen1.countvalue}
        countspan={getRightContent(rtlLanguage,pageContent.cardgreen1.countSpan)}
     
        bottomText={getRightContent(rtlLanguage,pageContent.cardgreen1.bottomText)}
        />

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
         <div className={styles.cards}>
          <div>
              <CardLeader
                  color={pageContent.cardgreen2.backgroundColor}
                  countValue={0}
                  topText={getRightContent(rtlLanguage,pageContent.cardgreen2.toptext)}
                  bottomText={getRightContent(rtlLanguage,pageContent.cardgreen2.bottomText)}
                />
          </div>
           <div className="spacer-32"></div>
            <div>
                <CardLeader
                  color={pageContent.cardyellow.backgroundColor}
                  topText={getRightContent(rtlLanguage,pageContent.cardyellow.toptext)}
                  countValue={0}
                  bottomText={getRightContent(rtlLanguage,pageContent.cardyellow.bottomText)}
                  />
            </div>
          
         </div>
             
         </div>
           <div className="spacer-64"></div>
            <div className={styles.imageContainer}>
            <img className={styles.image} src={photoleader} alt="chairman"/>
         </div>
   
    </div>)
}
export default Chairman ;