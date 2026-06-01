import { useState } from "react";
import styles from "./Menu.module.css";
import logo from "./images/logo.png";
import content from "../../content/content";
import useAppStore from "../../store";

import { useInView } from "react-intersection-observer";
import { getRightContent, getVisibleSensorAnimation } from "../../ts/util";
import LanguageToggler from "../LangaugeToggler/LanguageToggler";
import DownloadIcon from "../DownloadIcon/DownloadIcon";
import useWindowSize from "../../hooks/useWindowSize";
import SocialIcons from "../SocialIcons/SocialIcons";

const Menu = () => {
  const [ref, inView] = useInView();
  const pageContent = content.menuItems;
  const windowWidth = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const {rtlLanguage, changePage ,toggleLogo,currentPage } = useAppStore();

  const handleMenuItemClick = (mainLevel: number, subLevel = -1) => {
    changePage({ mainPage: mainLevel, subMenuPageLevel1: subLevel });

  };

  return (
  <div
          ref={ref}
          style={
            currentPage.mainPage === 0
              ? getVisibleSensorAnimation(
                  inView,
                  "fade-in-down 0.9s 1.7s backwards"
                )
              : { opacity: 1, transform: "none" }
          }
        >

      <nav className={styles.background}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            onClick={() => toggleLogo()} 
            className={`${styles.logo} ${styles.logoButton}`}
            src={logo}
            alt="Maaden Logo"
          /> 

        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <div>
            <ul className={styles.navigation}>
              {pageContent.map((item, index: number) => (
             <li
                  onClick={() => handleMenuItemClick(index + 1, 0)
                 
                  }
                  className={`uppercase white ${styles.itemsMenu} ${
                    windowWidth < 1290 ? "body-m" : "body-l"
                  } ${currentPage.mainPage === index + 1 ? "bold" : "normal "}`}
                  key={index}
                >
                  {getRightContent(rtlLanguage, item.label)}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.rightSide}>
            <span>
              <DownloadIcon />
            </span>
            <span className="body-l bold white">
              <LanguageToggler />
            </span>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className={`${styles.menuButton} ${styles.logoButton} ${
            isOpen ? styles.open : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.separator} />

            <div className={styles.rightSideMobile}>
              <span>
                <DownloadIcon />
              </span>
              <span className="body-l bold white">
                <LanguageToggler />
              </span>
            </div>

            <div className="spacer-16" />

            <ul
              className={`body-l normal uppercase white ${styles.navigationMobile}`}
            >
              {pageContent.map((item, index: number) => (
               <li
                    onClick={() => {handleMenuItemClick(index + 1, 0)
                      setIsOpen(false)
                    }}
                    className={`uppercase white ${styles.itemsMenu} ${
                      windowWidth < 1279 && windowWidth > 1023 ? "body-s" : "body-l"
                    } ${currentPage.mainPage === index + 1 ? "bold" : "normal"}`} // 👈 إذا هو العنصر الحالي خلي bold
                    key={index}
                  >
                    {getRightContent(rtlLanguage, item.label)}
                  </li>
              ))}
            </ul>

            <div className="spacer-16" />
            <SocialIcons />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Menu;
