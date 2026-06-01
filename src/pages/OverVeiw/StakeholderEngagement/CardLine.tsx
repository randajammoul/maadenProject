import { type SVGProps } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

interface CardLineProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const CardLine = ({ color = "#056952", ...props }: CardLineProps) => {
  const width  = useWindowSize();

  // 🔸 غيّر ارتفاع السهم حسب عرض الشاشة
  let height = 20; // الافتراضي

  if (width < 480) height = 15; // موبايل
  else if (width < 768) height = 20; // تابلت
  else if (width < 1200) height = 34; // شاشات متوسطة
  else height = 35; // ديسكتوب عريض

  return (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 334 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M333.707 8.30879C334.098 7.91827 334.098 7.2851 333.707 6.89458L327.343 0.530617C326.953 0.140092 326.319 0.140092 325.929 0.530617C325.538 0.921141 325.538 1.55431 325.929 1.94483L331.586 7.60168L325.929 13.2585C325.538 13.6491 325.538 14.2822 325.929 14.6728C326.319 15.0633 326.953 15.0633 327.343 14.6728L333.707 8.30879ZM0 8.60168H333V6.60168H0V8.60168Z"
        fill={color}
      />
    </svg>
  );
};

export default CardLine;
