import styles from "./ArrowNavigator.module.css";

import useScrollYNavbarChecker from "../../hooks/useScrollYNavbarChecker";
import useAppStore from "../../store";
import type { PagesStructure } from "../../store";
import SingleNavigator from "./Navigator/SingleNavigator.module";
const ArrowNavigator = () => {
  const { currentPage, changePage, menuOpen } = useAppStore();
  const showNavigator = useScrollYNavbarChecker(300);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const arrowPageSelector = (
    currentPage: PagesStructure,
    direction: "left" | "right"
  ) => {
    const { mainPage, subMenuPageLevel1 } = currentPage;
    if (mainPage === 0) {
      if (direction === "right")
        return changePage({
          mainPage: 1,
          subMenuPageLevel1: 0,
        });
    }
    if (mainPage === 1) {
      if (direction === "left") {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 0,
            subMenuPageLevel1: 0,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 1,
            subMenuPageLevel1: 0,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 1,
            subMenuPageLevel1: 1,
          });
      } else {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 1,
            subMenuPageLevel1: 1,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 1,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 0,
          });
      }
    }
    if (mainPage === 2) {
      if (direction === "left") {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 1,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 0,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 1,
          });
      } else {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 1,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 0,
          });
      }
    }
    if (mainPage === 3) {
      if (direction === "left") {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 2,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 0,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 1,
          });
      } else {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 1,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 4,
            subMenuPageLevel1: 0,
          });
      }
    }

    if (mainPage === 4) {
      if (direction === "left") {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 3,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 4,
            subMenuPageLevel1: 0,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 4,
            subMenuPageLevel1: 1,
          });
      } else {
        if (subMenuPageLevel1 === 0)
          return changePage({
            mainPage: 4,
            subMenuPageLevel1: 1,
          });
        if (subMenuPageLevel1 === 1)
          return changePage({
            mainPage: 4,
            subMenuPageLevel1: 2,
          });
        if (subMenuPageLevel1 === 2)
          return changePage({
            mainPage: 5,
            subMenuPageLevel1: 0,
          });
      }
    }

    if (mainPage === 5) {
      if (direction === "left") {
        return changePage({
          mainPage: 4,
          subMenuPageLevel1: 2,
        });
      } else {
        return changePage({
          mainPage: 6,
          subMenuPageLevel1: 0,
        });
      }
    }

    if (mainPage === 6) {
      if (direction === "left") {
        return changePage({
          mainPage: 5,
          subMenuPageLevel1: 0,
        });
      } else {
        return changePage({
          mainPage: 7,
          subMenuPageLevel1: 0,
        });
      }
    }
    if (mainPage === 7) {
      if (direction === "left") {
        return changePage({
          mainPage: 6,
          subMenuPageLevel1: 0,
        });
      }
    }
  };

  const handleGoToPrev = () => {
    arrowPageSelector(currentPage, "left");
  };

  const handleGoToNext = () => {
    arrowPageSelector(currentPage, "right");
  };

  if (!showNavigator || menuOpen) return null;

  return (
    <div className={styles.wrapper}>
      {((currentPage.mainPage === 1 && currentPage.subMenuPageLevel1 > 0) ||
        currentPage.mainPage > 1) && (
        <SingleNavigator handleClick={handleGoToPrev} direction="left" />
      )}
      <div className={styles.middle}>
        <SingleNavigator handleClick={handleGoToTop} />
      </div>
      {currentPage.mainPage <= 6 && (
        <SingleNavigator handleClick={handleGoToNext} direction="right" />
      )}
    </div>
  );
};

export default ArrowNavigator;
