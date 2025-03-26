import { useEffect, useState } from "react";
import "../styles/scrollDown.css";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`md:fixed flex flex-col justify-center items-center md:bottom-20 md:left-1/2 transform md:-translate-x-1/2 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="scroll-arrow border-[#6A42C2] dark:border-purple-300 delay" style={{ bottom: "30px" }} />
      <div className="scroll-arrow border-[#6A42C2] dark:border-purple-300" style={{ bottom: "15px" }} />
    </div>
  );
  
};

export default ScrollIndicator;
