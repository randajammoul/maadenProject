
import Cover from "../../component/Cover/Cover";
import useAppStore from "../../store";
import content from "../../content/content";
import { getRightContent } from "../../ts/util";
import mobileImage from "./images/cover-mobile.jpg";
import tabletImage  from "./images/cover-tablet.jpg";
import desktopImage from "./images/cover.jpg";
import TabTable from "../../component/TabTable/TabTable";
import StaticTable from "../../component/StaticTable/StaticTable";
import Paragraph from "../../component/Paragraph/Paragraph";
const pageContent = content.pages.FinancialStatements.content;
const FinancialStatements = () => {
  const { rtlLanguage } = useAppStore();

  return (
    <div>
      <Cover
         title={getRightContent(rtlLanguage,pageContent.title)}
         images={{
          mobile: mobileImage,
          tablet: tabletImage,
          desktop: desktopImage,
        }}
       />
      <div className="spacer-64"></div>
     <div className="container horizontal-padding">
       <TabTable
          tabLabels={getRightContent(rtlLanguage, pageContent.tab.labels)}
          contents={[
            <> 
             <Paragraph fontClassName="body-m" classNames="bold color-yellow">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title1
                )}
              </Paragraph>
              <Paragraph fontClassName="h4" classNames="bold color-green">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title2
                )}
              </Paragraph>
              <div className="spacer-8"></div>
              <Paragraph fontClassName="body-l" classNames={`bold ${getRightContent(rtlLanguage, pageContent.table1.color)}`}>
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title3
                )}
              </Paragraph>
              
          
              <div className="spacer-32"></div>
              <StaticTable
              minWidthColumnIndexes={[1]}
                // coloredColumnsBackgrounds={[]}
                // coloredRowsBackground={[]}
                invertColumnAlign={[0]}
                // minWidthColumnIndexes={[1, 2, 3,]}
                firstColumnWider={true}
                preHeader={getRightContent(
                  rtlLanguage,
                  pageContent.table1.preHeader
                )}
              
                customPreHeaderColSpan={1}
                indexToApplycustomPreHeaderColSpan={2}
                header={getRightContent(rtlLanguage,pageContent.table1.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table1.contentRows
                )}
                customTDClasses={[
                    " ",
                    " ",
                    "",
                    " ",
                ]}
                customRowClasses={[
                 " ",
                 " ",
                 " ",
                 "bold",
                  " ",
                  " ",
                  " ",
                  " ", 
                  " ", 
                  "bold ",
                  " ",
                  " ",
                  " ",
                  " ",
                  "bold",
                  " ",
                  " ",
                  " ",
                  " bold",
                  "bold",
                  " ",
                  " ",
                  "bold",
                  "bold"

                ]}
              />
              <div className="spacer-64"></div>
            </>,
             <>
         <Paragraph fontClassName="body-m" classNames="bold color-yellow">
                    {getRightContent(
                      rtlLanguage,
                      pageContent.table2.tableLabels.title1
                    )}
                  </Paragraph>
                  <Paragraph fontClassName="h4" classNames="bold color-green">
                    {getRightContent(
                      rtlLanguage,
                      pageContent.table2.tableLabels.title2
                    )}
                  </Paragraph>
                  <div className="spacer-8"></div>
                  <Paragraph fontClassName="body-l" classNames={`bold ${getRightContent(rtlLanguage, pageContent.table1.color)}`}>
                    {getRightContent(
                      rtlLanguage,
                      pageContent.table2.tableLabels.title3
                    )}
                  </Paragraph>
                  
                  <Paragraph fontClassName="body-l" classNames="color-gray">
                    {getRightContent(
                      rtlLanguage,
                      pageContent.table2.tableLabels.title4
                    )}
                  </Paragraph>
                  <div className="spacer-32"></div>
                  <StaticTable
                  minWidthColumnIndexes={[1]}
                    // coloredColumnsBackgrounds={[]}
                    // coloredRowsBackground={[]}
                    invertColumnAlign={[0]}
                    // minWidthColumnIndexes={[1, 2, 3,]}
                    firstColumnWider={true}
                    preHeader={getRightContent(
                      rtlLanguage,
                      pageContent.table2.preHeader
                    )}
                  
                    customPreHeaderColSpan={2}
                    indexToApplycustomPreHeaderColSpan={2}
                    header={getRightContent(rtlLanguage,pageContent.table2.header)}
                    contentsRow={getRightContent(
                      rtlLanguage,
                      pageContent.table2.contentRows
                    )}
                    customTDClasses={[
                        " ",
                        " ",
                        "",
                        " ",
                    ]}
                    customRowClasses={[
                     "bold ",
                     "bold",
                     "bold ",
                     "  ",
                      " ",
                      " ",
                      "bold",
                      " ", 
                      " ", 
                      " ",
                      "bold",
                      "bold ",
                      "bold ",
                      " ",
                      " ",
                      "bold",
                    ]}
                  />
                  <div className="spacer-64"></div>

            </>,
            <>
            <Paragraph fontClassName="body-m" classNames="bold color-yellow">
                       {getRightContent(
                         rtlLanguage,
                         pageContent.table3.tableLabels.title1
                       )}
                     </Paragraph>
                     <Paragraph fontClassName="h4" classNames="bold color-green">
                       {getRightContent(
                         rtlLanguage,
                         pageContent.table3.tableLabels.title2
                       )}
                     </Paragraph>
                     <div className="spacer-8"></div>
                     <Paragraph fontClassName="body-l" classNames={`bold ${getRightContent(rtlLanguage, pageContent.table1.color)}`}>
                       {getRightContent(
                         rtlLanguage,
                         pageContent.table3.tableLabels.title3
                       )}
                     </Paragraph>
                     
                     <Paragraph fontClassName="body-l" classNames="color-gray">
                       {getRightContent(
                         rtlLanguage,
                         pageContent.table3.tableLabels.title4
                       )}
                     </Paragraph>
                     <div className="spacer-32"></div>
                     <StaticTable
                     minWidthColumnIndexes={[1]}
                       // coloredColumnsBackgrounds={[]}
                       // coloredRowsBackground={[]}
                       invertColumnAlign={[0]}
                       // minWidthColumnIndexes={[1, 2, 3,]}
                       firstColumnWider={true}
                       preHeader={getRightContent(
                         rtlLanguage,
                         pageContent.table3.preHeader
                       )}
                     
                       customPreHeaderColSpan={2}
                       indexToApplycustomPreHeaderColSpan={2}
                       header={getRightContent(rtlLanguage,pageContent.table3.header)}
                       contentsRow={getRightContent(
                         rtlLanguage,
                         pageContent.table3.contentRows
                       )}
                       customTDClasses={[
                           " ",
                           " ",
                         
                           " ",
                       ]}
                       customRowClasses={[
                        "bold ",
                        "bold",
                        " ",
                        "  ",
                         " ",
                         " ",
                         " ",
                         " ", 
                         " ", 
                         " ",
                         " ",
                         "bold",
                         "bold",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         "bold",
                         "bold",
                         "bold",
                         "bold",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         "bold",
                         "bold",
                         "bold ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         "bold ",
                         "bold ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         " ",
                         "bold ",
                         "bold ",
                         "bold ",
                       ]}
                     />
                     <div className="spacer-64"></div>
   
            </>,
             <>
             <Paragraph fontClassName="body-m" classNames="bold color-yellow">
                        {getRightContent(
                          rtlLanguage,
                          pageContent.table4.tableLabels.title1
                        )}
                      </Paragraph>
                      <Paragraph fontClassName="h4" classNames="bold color-green">
                        {getRightContent(
                          rtlLanguage,
                          pageContent.table4.tableLabels.title2
                        )}
                      </Paragraph>
                      <div className="spacer-8"></div>
                      <Paragraph fontClassName="body-l" classNames={`bold ${getRightContent(rtlLanguage, pageContent.table1.color)}`}>
                        {getRightContent(
                          rtlLanguage,
                          pageContent.table4.tableLabels.title3
                        )}
                      </Paragraph>
                      
                      <Paragraph fontClassName="body-l" classNames="color-gray">
                        {getRightContent(
                          rtlLanguage,
                          pageContent.table4.tableLabels.title4
                        )}
                      </Paragraph>
                      <div className="spacer-32"></div>
                      <StaticTable
                       minWidthColumnIndexes={[0,3,4,1]}
                        // coloredColumnsBackgrounds={[]}
                        // coloredRowsBackground={[]}
                        invertColumnAlign={[0]}
                      
                        firstColumnWider={true}
                        preHeader={getRightContent(
                          rtlLanguage,
                          pageContent.table4.preHeader
                        )}
                      
                        customPreHeaderColSpan={7}
                        indexToApplycustomPreHeaderColSpan={1}
                        header={getRightContent(rtlLanguage,pageContent.table4.header)}
                        contentsRow={getRightContent(
                          rtlLanguage,
                          pageContent.table4.contentRows
                        )}
                        customTDClasses={[
                        
                          " ",
                          " ",
                          " ",
                          " ",
                      ]}
                        customRowClasses={[
                         " ",
                         " ",
                         " ",
                         "  ",
                          " ",
                          " ",
                          " ",
                          " ", 
                          " ", 
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                          " ",
                         
                        ]}
                      />
                      <div className="spacer-64"></div>
  
             </>,
               <>
               <Paragraph fontClassName="body-m" classNames="bold color-yellow">
                          {getRightContent(
                            rtlLanguage,
                            pageContent.table5.tableLabels.title1
                          )}
                        </Paragraph>
                        <Paragraph fontClassName="h4" classNames="bold color-green ">
                          {getRightContent(
                            rtlLanguage,
                            pageContent.table5.tableLabels.title2
                          )}
                        </Paragraph>
                        <div className="spacer-8"></div>
                        <Paragraph fontClassName="body-l" classNames={`bold ${getRightContent(rtlLanguage, pageContent.table1.color)}`}>
                          {getRightContent(
                            rtlLanguage,
                            pageContent.table5.tableLabels.title3
                          )}
                        </Paragraph>
                        
                        <Paragraph fontClassName="body-l" classNames="color-gray">
                          {getRightContent(
                            rtlLanguage,
                            pageContent.table5.tableLabels.title4
                          )}
                        </Paragraph>
                        <div className="spacer-32"></div>
                        <StaticTable
                         minWidthColumnIndexes={[4]}
                          // coloredColumnsBackgrounds={[]}
                          // coloredRowsBackground={[]}
                          invertColumnAlign={[0]}
                        
                          firstColumnWider={true}
                          header={getRightContent(rtlLanguage,pageContent.table5.header)}
                          contentsRow={getRightContent(
                            rtlLanguage,
                            pageContent.table5.contentRows
                          )}
                          customTDClasses={[
                            " ",
                            " ",
                         
                            " ",
                        ]}
                          customRowClasses={[
                           "bold ",
                           " ",
                           "bold ",
                           "  ",
                            " ",
                            " ",
                            " ",
                            " ", 
                            " ", 
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            "  ",
                            "bold",
                            " ",
                            " ",
                            " ", 
                            " ", 
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            "bold ",
                  
                          ]}
                        />
                        <div className="spacer-64"></div>
                        <StaticTable
                         minWidthColumnIndexes={[4]}
                          // coloredColumnsBackgrounds={[]}
                          // coloredRowsBackground={[]}
                          invertColumnAlign={[0]}
                          preHeader={getRightContent(
                            rtlLanguage,
                            pageContent.table6.preHeader
                          )}
                          customPreHeaderColSpan={2}
                          indexToApplycustomPreHeaderColSpan={2}
                          firstColumnWider={true}
                          header={getRightContent(rtlLanguage,pageContent.table6.header)}
                          contentsRow={getRightContent(
                            rtlLanguage,
                            pageContent.table6.contentRows
                          )}
                          customTDClasses={[
                            " ",
                            " ",
                          
                            " ",
                        ]}
                          customRowClasses={[
                           "bold ",
                           " ",
                           " ",
                           "  ",
                            " ",
                            " ",
                            " ",
                            " ", 
                            " ", 
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            "bold ",
                            "bold ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            "  ",
                            "bold",
                            "bold ",
                             " ",
                            "bold", 
                            "bold",
                          ]}
                        />
               </>,
      
       
          ]}
          />
     </div>
    </div>
  );
};

export default FinancialStatements;
