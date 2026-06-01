import { ReactNode, useState } from "react";
import styles from "./TabTable.module.css";

interface Props {
  contents: ReactNode[];
  tabLabels: string[];
  tabIDName?: string;
}
const TabTable = ({ contents, tabLabels, tabIDName = "tab" }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  function handleTabClick(labelIndex: number): void {
    setCurrentTab(labelIndex);
    document.getElementById(tabIDName)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.wrapper}>
      <div className={[styles.tabSelectorsWrapper,''].join(' ')}>
        {tabLabels.map((label, labelIndex) => (
          <span
            onClick={() => handleTabClick(labelIndex)}
            className={[
              styles.tabLabel,
              "Button",
              'body-l',
              currentTab === labelIndex ? styles.active : "",
            ].join(" ")}
            key={labelIndex}
          >
            {label}
          </span>
        ))}
      </div>      
      <div key={currentTab}  className={styles.tabContentWrapper}>
        <div id={tabIDName}  className={styles.tabIdElement}></div>
        {contents[currentTab]}
      </div>
    </div>
  );
};

export default TabTable;
