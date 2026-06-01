import Menu from "../Menu/Menu";
import styles from "./Layout.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";
import type { PagesStructure } from "../../store";

import Home from "../../pages/Home/Home";
import OverView from "../../pages/OverVeiw/OverView";
import Leadership from "../../pages/LeaderShip/LeaderShip";
import StrategicReview from "../../pages/StrategicReview/StrategicReview";
import OperationalReview from "../../pages/OperationalReview/OperationalReview";
import Sustainability from "../../pages/Sustainability/Sustainability";
import FinancialStatements from "../../pages/FinancialStatements/FinancialStatements";
import DownloadCenter from "../../pages/DownloadCenter/DownloadCenter";
import Modal from "../Modal/Modal";
import ArrowNavigator from "../ArrowNavigator/ArrowNavigator";

const Layout = () => {
  const { currentPage } = useAppStore();
  const windowWidth = useWindowSize();

  const pageSelector = (currentPage: PagesStructure) => {
    const { mainPage } = currentPage;
    
    if (mainPage === 0) return <Home />;
    if (mainPage === 1) return <OverView />;
    if (mainPage === 2) return <Leadership />;
    if (mainPage === 3) return <StrategicReview />;
    if (mainPage === 4) return <OperationalReview />;

    // if (mainPage === 5) return <Sustainability />;
     if (mainPage === 5) return <FinancialStatements />;
     if (mainPage === 6) return <DownloadCenter />;


  };

  return (
    <div className={styles.layout}>
      {/* Menu Container */}
      <div className={styles.menuOverlay}>
        <div className={styles.menuContainer}>
          <Menu />
        </div>
        {windowWidth >= 1024 && <SocialIcons />}
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {pageSelector(currentPage)}
        <ArrowNavigator/>
      </main>
      <Modal/>
    </div>
  );
};

export default Layout;
