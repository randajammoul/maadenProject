import styles from "./CarouselImage.module.css";
import c1 from "./images/c1-1.jpg";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4-1.jpg";
import c5 from "./images/c5.jpg";

const images = [c1, c2, c3, c4, c5];

const CarouselImage = () => {
  return (
    <div className={styles.shineImage}>
     <div className={styles.carousel}>
      <div className={styles.track}>
        {/* نكرر الصور مرتين أو أكثر لتجنب الفراغ عند النهاية */}
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
    </div>
 
  
  );
};

export default CarouselImage;
