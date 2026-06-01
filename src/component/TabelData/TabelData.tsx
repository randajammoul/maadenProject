import React from "react";
import styles from "./TabelData.module.css";
import content from "../../content/content";
import Paragraph from "../Paragraph/Paragraph";
import useAppStore from "../../store"
import { getRightContent} from "../../ts/util";
const TabelData = () => {
  const data = content.pages.StrategicReview.maaden2024.dataTabet;

  // الأعمدة الأربعة
  const [col1, col2, col3, col4] = data;
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.table}>
        {/* \===== Header ===== */}
        <div className={` ${styles.header} ${styles.green}`}>
          <Paragraph fontClassName="subheading" classNames="white bold uppercase">
            {getRightContent(rtlLanguage,col1.titleColumn)}
            
          </Paragraph>
         
        </div>
        <div className={` ${styles.header} ${styles.yellow}`}>
           <Paragraph fontClassName="subheading" classNames="white bold uppercase">
                {getRightContent(rtlLanguage,col2.titleColumn)}
          </Paragraph>
        </div>
        <div className={`${styles.header} ${styles.yellow} ${styles.noBorder}`}>
              {" "}
         </div>

        <div className={` ${styles.header} ${styles.gray}`}>
           <Paragraph fontClassName="subheading" classNames="white bold uppercase">
               {getRightContent(rtlLanguage,col4.titleColumn)}
          </Paragraph>
        </div>

        {/* ===== Rows ===== */}
           {/* ===== Rows ===== */}
{col1.contant?.map((pillar, i) => (
  <React.Fragment key={i}>
    {/* العمود 1 */}
    <div className={`${styles.cell} ${styles.greenLight}`}>
      <Paragraph fontClassName="body-l" classNames="text-gray bold ">
        {getRightContent(rtlLanguage, pillar.title)}
      </Paragraph>
      <Paragraph fontClassName="body-l" classNames="text-gray">
        {getRightContent(rtlLanguage, pillar.text)}
      </Paragraph>
    </div>

    {/* العمود 2 */}
    <div className={`${styles.cell} ${styles.yellowLight}`}>
      <ul className={styles.list}>
        {getRightContent(rtlLanguage, col2.content?.[i]?.text ?? []).map((item :string, idx:number) => (
          <li key={idx}>
            <Paragraph fontClassName="body-l" classNames="text-gray">
              {item}
            </Paragraph>
          </li>
        ))}
      </ul>
    </div>

    {/* العمود 3 — يمتد على 4 صفوف */}
    {i === 0 && col3.contant?.[0] && (
      <div
        className={`${styles.cell} ${styles.yellowLight}`}
        style={{ gridRow: `span ${col1.contant?.length ?? 1}` }}
      >
        <Paragraph fontClassName="body-l" classNames="text-gray bold ">
          {getRightContent(rtlLanguage, col3.contant[0].title)}
        </Paragraph>

        <Paragraph fontClassName="body-l" classNames="text-gray">
          {getRightContent(rtlLanguage, col3.contant[0].textTop)}
        </Paragraph>

        <ul className={styles.list}>
          {getRightContent(rtlLanguage, col3.contant[0].text)?.map((item :string, idx:number) => (
            <li key={idx}>
              <Paragraph fontClassName="body-l" classNames="text-gray">
                {item}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* العمود 4 — يمتد على 4 صفوف */}
    {i === 0 && col4.contant?.[0] && (
      <div
        className={`${styles.cell} ${styles.blueLight}`}
        style={{ gridRow: `span ${col1.contant?.length ?? 1}` }}
      >
        <ul className={styles.list}>
          {getRightContent(rtlLanguage, col4.contant[0].text)?.map((item :string, idx:number) => (
            <li key={idx}>
              <Paragraph fontClassName="body-l" classNames="text-gray">
                {item}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    )}
  </React.Fragment>
))}

      </div>
    </div>
  );
};

export default TabelData;
