import content from "../../content/content"; 
import { getRightContent } from "../../ts/util"; 
import useAppStore from "../../store"; 
import styles from "./Modal.module.css";

const info = content.general.irInfo;

const Modal = () => {
  const { rtlLanguage, toggleIR, irOpen } = useAppStore();

  return (
    <div
      className={[styles.wrapper, irOpen ? styles.show : styles.hide, "body-l"].join(" ")}
      onClick={() => toggleIR()}
    >
      <div className={[styles.modal, "body-m"].join(" ")} onClick={e => {e.stopPropagation()}}>
        <div className={styles.closeContainer}>
          <span
            className={styles.close}
            onClick={(e) => {
              toggleIR();
              e.stopPropagation();
            }}
          >
            X
          </span>
        </div>
        <h3 className={styles.title}>
          {getRightContent(rtlLanguage, info.title)}
        </h3>
        <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.address.label)}
          </span>
          <span>{getRightContent(rtlLanguage, info.address.text)}</span>
        </p>
        <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.phone.label)}
          </span>
          <bdi>
              <a href={`tel:${info.phone.value}`} className={styles.text}>
                { info.phone.text}
              </a>
          </bdi>
        </p>

        {/* {info.box?.label[0] && <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.box.label)}
          </span>
          <span>{info.box.value}</span>
        </p>} */}

        {/* <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.fax.label)}
          </span>
          <bdi>
              <a href={`tel:${info.fax.value}`} className={styles.text}>
                {info.fax.text}
              </a>
          </bdi>
        </p> */}

{/* <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.box.label)}
          </span>
          <span>{getRightContent(rtlLanguage, info.box.text)}</span>
        </p> */}
        <p className={styles.labelContainer}>
          <span className={styles.label}>
            {getRightContent(rtlLanguage, info.email.label)}
          </span>
          <a href={`mailto:${info.email.value}`} className={styles.text}>
            {info.email.value}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
