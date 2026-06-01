
import Cover from "../../component/Cover/Cover";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import Tabs from "../../component/Tabs/Tabs";
import desktopImage from "./images/cover.jpg";
import tabletImage from "./images/cover-tablet.jpg";
import mobileImage from "./images/cover-mobile.jpg";
import Phosphates from "./Phosphates/Phosphates";
import Aluminum from "./Aluminum/Aluminum";
import BaseMetals from "./BaseMetalsAndNewMinerals/BaseMetalsAndNewMinerals";



 const pageContent = content.pages.OperationalReview;
const OperationalReview = () => {
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
            <Phosphates />          
          </>,
          <>
            <div className="spacer-64"></div>
             <Aluminum/>
          </>,
          <>
            <div className="spacer-64"></div>
            <BaseMetals/>  
          </>,
        ]}
      />
        </>
    )
}
export default OperationalReview;