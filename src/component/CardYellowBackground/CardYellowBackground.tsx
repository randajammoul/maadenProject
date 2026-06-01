import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardYellowBackground.module.css";

interface Props {
  texts: string[]; 
  icon: string;
}

const CardYellowBackground = ({ texts, icon }: Props) => {
 

  return (
    <div className={styles.cardYellowBackground}>
      <div>
        {texts.map((text, index) => (
          <Paragraph
            fontClassName="bold body-m"
              classNames={[
              "green-brand",
              text === " " ? styles.invisible : "",
            ].join(" ")}
            key={index}
        
           
          >
             {
              text === " " ? "noText"  : text
             }
          </Paragraph>
        ))}
      </div>
      <div>
        <img className={styles.icon} src={icon} alt="card icon" />
      </div>
    </div>
  );
};

export default CardYellowBackground;
