import useAppStore from "../../store";
import styles from "./LanguageToggler.module.css";
const LanguageToggler = () => {
  const { toggleLanguage, rtlLanguage } = useAppStore();
  return (
    <div
      className={[styles.languageToggler, "body-l bold"].join(" ")}
      onClick={() => {toggleLanguage();}}
    >
      {rtlLanguage ? "English" : "العربية"}
    </div>
  );
};

export default LanguageToggler;
