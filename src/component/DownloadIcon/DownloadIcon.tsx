import styles from "./DownloadIcon.module.css";
import downloadImageWhite from "./images/download-white.svg";
import useAppStore from "../../store";
const DownloadIcon = () => {
  const { changePage, menuOpen, toggleMenu } = useAppStore();
  const handleIconClick = () => {
    changePage({mainPage:7, subMenuPageLevel1:0});
    menuOpen && toggleMenu();
  };
  return (
    <div className={styles.wrapper} onClick={handleIconClick}>
      {/* <img src={menuOpen ? downloadImageWhite :downloadImage} alt="" /> */}
      <img src={downloadImageWhite} alt="" />
    </div>
  );
};

export default DownloadIcon;
