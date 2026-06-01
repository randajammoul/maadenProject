import { useCallback, useEffect, useState } from "react";

const useScrollDirection = (callback: () => void) => {
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = useCallback(() => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY) {
        // Scrolling Down
        callback();
      }
  
      setLastScrollY(currentScrollY);
    }, [lastScrollY, callback]);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
  };

  export default useScrollDirection;