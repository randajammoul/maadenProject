import styles from "./SingleNavigator.module.css";
import redArrowImage from "../../../assets/images/single-arrow.svg";
interface Props {
  handleClick: () => void;
  direction?: "up" | "left" | "right";
}
const SingleNavigator = ({ handleClick, direction = "up" }: Props) => {
  return (
    <div
      className={[
        styles.navigator,
        direction === "right"
          ? styles.right
          : direction === "left"
          ? styles.left
          : "",
      ].join(" ")}
      onClick={handleClick}
    >
      <img src={redArrowImage} alt="" className={styles.arrow} />
    </div>
  );
};

export default SingleNavigator;
