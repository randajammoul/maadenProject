import Cover from "../../component/Cover/Cover";
import mobileImage from "./images/cover-mobile.png";
import tabletImage from "./images/cover-tablet.png";
import desktopImage from "./images/cover.png";
import content from "../../content/content";
import { getRightContent } from "../../ts/util";
import useAppStore from "../../store";
import Tabs from "../../component/Tabs/Tabs";
import AtAGlance from "./AtAGlance/AtAGlance";
import YearInReview from "./YearInReview/YearInReview";
import StakeholderEngagement from "./StakeholderEngagement/StakeholderEngagement"
const pageContent =content.pages.overveiw;
const OverView = ()=>{
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
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
        // contentClassNames={["", "borderBottomWhite", "", "borderBottomWhite"]}
         labels={getRightContent(rtlLanguage, pageContent.tabLabels)}
         labelsText={getRightContent(rtlLanguage, pageContent.tabLabelsText)}
         contents={[
          <>
            <div className="spacer-64"></div>
            <AtAGlance />
            {/* <Footer image={investmentCaseFooter} /> */}
          </>,
          <>
            <div className="spacer-64"></div>
            <YearInReview />            
          </>,
          <>
            <div className="spacer-64"></div>
            <StakeholderEngagement />          
          </>,
        ]}
      />

       
    </>)
}
export default OverView ; 