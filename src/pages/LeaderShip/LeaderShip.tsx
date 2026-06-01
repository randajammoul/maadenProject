import Cover from "../../component/Cover/Cover";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import Tabs from "../../component/Tabs/Tabs";
 import CFO from "./CFO/CFO";
import CEO from "./CEO/CEO";
import Chairman from "./Chairman/Chairman";
import desktopImage from "./images/cover.png";
import tabletImage from "./images/cover-tablet.png";
import mobileImage from "./images/cover-mobile.png";



 const pageContent = content.pages.Leadership;
const Leadership = () => {
    const rtlLanguage = useAppStore((state) => state.rtlLanguage)
    return(<>
        <Cover
         title={getRightContent(rtlLanguage,pageContent.title)}
         images={{
          mobile: mobileImage,
          tablet: tabletImage,
          desktop: desktopImage,
        }}
       />
        <Tabs
         labels={getRightContent(rtlLanguage, pageContent.tabLabels)}
        labelsText={getRightContent(rtlLanguage, pageContent.tabLabelsText)}
        noText
         contents={[
          <>
            <div className="spacer-64"></div>
            <Chairman />          
          </>,
          <>
            <div className="spacer-64"></div>
             <CEO/>

                
          </>,
          <>
            <div className="spacer-64"></div>
            <CFO/>  
          </>,
        ]}
      />
        </>
    )
}
export default Leadership;