 import { useInView } from "react-intersection-observer";
import icon from "../../pages/OverVeiw/AtAGlance/images/Awards _1 1.svg";
import Paragraph from "../Paragraph/Paragraph";
 import styles from "./CardWooden.module.css";
import { getVisibleSensorAnimation } from "../../ts/util";
 interface props {
    title:string[]
    data:string[]
    image:string
 }
 const CardWooden = ({title,data,image}:props) => {
  const {ref,inView} = useInView()
    return (<>
          <div className={styles.containerCardWood} >
              <div className={styles.containerimage}>
                <img className={styles.image} src={image} alt="image-Wooden"/>
              </div>
              <div className={styles.containerText}>
            <div className="spacer-32"> </div>
             <div>
             <div className={styles.titlecard}>
                <div>
                     {
                    title.map((item,idx)=>{
                        return(
                        <Paragraph key={idx} fontClassName="body-l bold" classNames="white uppercase" >
                                    {item}
                        </Paragraph>
                        )
                    })
                }
                </div>
                <div>
                    <img src={icon}/>
                </div>
            </div>
             </div>
                    <div className="spacer-64"> </div>        
                 {
                    data.map((item,index)=>{
                        return(<>
                          <div>
                            <div
                             ref={ref}
                             className={styles.liner}
                             style={getVisibleSensorAnimation(inView,`scale-from-center 0.9s 0.4s backwards`)}></div>
                             <div className="spacer-32"> </div>
                           <div key={index}>
                        
                            <Paragraph delay={index*0.4 + "s"} fontClassName="body-m regular" classNames="white uppercase" >
                                {item}
                            </Paragraph>
                          </div>
                            <div className="spacer-32"> </div>
                          </div>
                        </>)
                    })
                 }
              </div>

          </div>
      </>)
}
export default CardWooden;