import CountUp from "react-countup";
import styles from "./Count.module.css";
import useAppStore from "../../store";
import useWindowSize from "../../hooks/useWindowSize";
import { getVisibleSensorAnimation } from "../../ts/util";
import { useInView } from "react-intersection-observer";

interface Props {
  topTitle?: string;
  classTopTitleColor?: string;
  text?: string;
  countTitle?: string;
  countValue: number;
  percentage?: string;
  percentageAr?: string;
  countSpan?: string;
  countSpanLeft?: string;
  decimalCount?: number;
  showLine?: boolean;
  component?: React.ReactNode;
  src?: string;
  underText?:React.ReactNode;
  classUnderText?: string;
  classUnderTextColor?: string;
  classImg?: string;
  classColor?: string;
  instateCount?: string;
  classWidth?: string;
  spanUnderText?: string;
  style?: React.CSSProperties;
  counterClassName?: string;
  classInstateCount?: string;
  classCountSpan?: string;
  classTopTitle?: string;
  classSpanUnderText?: string;
  classCountValue?: string;
  classTextImg?: string;
  reduceCounterFontSize?: boolean;
  textImg?: string;
  increaseCounterFontSize?: boolean;
}
const Count = ({
  increaseCounterFontSize,
  textImg,
  reduceCounterFontSize,
  classInstateCount = "h2",
  counterClassName = "",
  topTitle,
  text,
  countTitle,
  countValue,
  percentage,
  percentageAr,
  countSpan,
  countSpanLeft,
  decimalCount,
  component,
  showLine = false,
  src,
  underText,
  classImg = "",
  classColor = "#007985",
  instateCount,
  classWidth = "",
  classUnderText = "",
  spanUnderText,
  classUnderTextColor = "",
  style,
  classTopTitleColor = "#000",
  classCountSpan = "subheading",
  classTopTitle = "subheading",
  classCountValue = "bold",
  classSpanUnderText = "body-s",
  classTextImg
}: Props) => {
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  const windowWidth = useWindowSize();
  const { ref, inView: isVisible } = useInView();

  let classFontH2 = windowWidth < 400 ? "h4" : "h3";
  if (reduceCounterFontSize) classFontH2 = "subtitle-l";
  if (increaseCounterFontSize) classFontH2 = "h1";
  return (
    <div
      className={`${styles.countLine} ${
        showLine ? styles.withLine : styles.withoutLine
      }`}
      style={style}
    >
      {showLine && <div className={styles.line}></div>}

      <div className={styles.count}>
        <div className={styles.topCount} ref={ref}>
          {topTitle && (
            <p
              style={getVisibleSensorAnimation(
                isVisible,
                "fade-in-40px1 1s ease-in-out backwards"
              )}
              className={[
                classTopTitle,
                styles.topTitleWidth,
                styles[classTopTitleColor],
                styles.topTitle,
              ].join(" ")}
            >
              {topTitle}
            </p>
          )}

          {text && (
          
                <p
                  style={getVisibleSensorAnimation(
                    isVisible,
                    "fade-in-40px 1s ease-in-out backwards"
                  )}
                  className="subtitle-s"
                >
                  {text}
                </p>
       
          )}
        </div>

        <div className={styles[classImg]}>
          <div className={styles.imgText}>
            <img
              style={getVisibleSensorAnimation(
                isVisible,
                "scale-from-center 0.8s ease-in-out forwards"
              )}
              className={styles.img}
              src={src}
              alt=""
            />

            {textImg && <p
              style={getVisibleSensorAnimation(
                isVisible,
                "scale-from-center 0.8s ease-in-out forwards"
              )}
              className={["subheading green-brand", classTextImg].join(" ")}
            >
              {textImg}
            </p>}
          </div>

          <div
            className={[
              styles.countText,
              !countTitle ? styles.withoutLine : "",
            ].join(" ")}
          >
            {countTitle && (
              <p
                style={getVisibleSensorAnimation(
                  isVisible,
                  "fade-in-40px 0.5s ease-in-out forwards"
                )}
                className={[
                  rtlLanguage ? "subtitle-l" : classFontH2,
                  styles.countTitle,
                ].join(" ")}
              >
                {countTitle}
              </p>
            )}

            {(countValue !== 0 || instateCount) && (
              <div>
                {isVisible ? (
                  <div
                    className={[
                      styles.countValue,
                      styles[classColor],
                      counterClassName,
                    ].join(" ")}
                  >
                    {countSpanLeft && (
                      <p className={[classFontH2, styles.bold].join(" ")}>
                        {countSpanLeft}
                      </p>
                    )}
                    {instateCount ? (
                      <p
                        className={[
                          // styles.bold,
                          // "h2",
                          classInstateCount,
                          // styles.instateCountWidth,
                        ].join(" ")}
                      >
                        {instateCount}
                      </p>
                    ) : (
                      <CountUp
                        duration={0.5}
                        className={[classFontH2, classCountValue].join(" ")}
                        end={countValue}
                        suffix={rtlLanguage ? "" : percentage}
                        prefix={rtlLanguage ? percentageAr : ""}
                        decimals={decimalCount}                        
                      />
                    )}

                    <p
                      className={[
                        // classFontH2,
                        // styles.bold,
                        classCountSpan,
                        styles.countSpan,
                      ].join(" ")}
                    >
                      {countSpan}
                    </p>
                  </div>
                ) : (
                  "invisibility"
                )}
              </div>
            )}
          </div>

          {underText && <p
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 1s ease-in-out backwards"
            )}
            className={[
              classUnderText,
              styles.underText,
              styles[classUnderTextColor],
            ].join(" ")}
          >
            {underText}
          </p>}

          <p
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 1s ease-in-out backwards"
            )}
            className={[ classSpanUnderText].join(" ")}
          >
            {spanUnderText}
          </p>
        </div>
        {component ? (
          <div className={[styles.digram, styles[classWidth]].join(" ")}>
            {component}
          </div>
        ) : (
          <div className={styles.digram}>{component}</div>
        )}
      </div>
    </div>
  );
};

export default Count;
