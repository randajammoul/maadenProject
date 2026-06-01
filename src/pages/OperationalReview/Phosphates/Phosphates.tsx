import Paragraph from "../../../component/Paragraph/Paragraph";
import content from "../../../content/content";
import { getRightContent } from "../../../ts/util";
import useAppStore from "../../../store";
const pageContent = content.pages.OperationalReview.phosphates;
const Phosphates = () =>{
    const rtlLanguage = useAppStore((state) => state.rtlLanguage);
    return(<>
          <div className="container horizontal-padding">
                  <div className="spacer-32"></div>
                  <Paragraph fontClassName="headline" classNames="color-yellow uppercase">
                        {getRightContent(rtlLanguage,pageContent.title)}
                  </Paragraph>
                <div className="spacer-16"></div>
                  <Paragraph fontClassName="headline" classNames="color-yellow">
                        {getRightContent(rtlLanguage,pageContent.text)}
                  </Paragraph>
              <div className="spacer-64"></div>
            
          </div>
    </>)
}
export default Phosphates;