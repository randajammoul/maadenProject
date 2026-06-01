import Cover from "../../component/Cover/Cover";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import Tabs from "../../component/Tabs/Tabs";
import desktopImage from "./images/cover.jpg";
import tabletImage from "./images/‏‏cover-tablet.jpg";
import mobileImage from "./images/cover-mobile.jpg";
import MaagenStrategy2040 from "./MaadenStrategy2040/MaadenStrategy2040";
import InvestmentCase from "./InvestmentCase/InvestmentCase";
import Exploration from "./Exploration/Exploration";

 const pageContent = content.pages.StrategicReview;
const StrategicReview = () => {
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
            <MaagenStrategy2040/>        
          </>,
          <>
            <div className="spacer-64"></div>
             <Exploration/>      
          </>,
          <>
            <div className="spacer-64"></div>
              <InvestmentCase/>
          </>,
        ]}
      />
        </>
    )
}
export default StrategicReview;





