import React, { useEffect, useState } from "react";
import HeroText from "../animations/heroText";
import Cube from "../animations/AnimatedCube";
import ScrollIndicator from "../animations/scrollDown";
import { scrollToSection } from "../utils/scrollTo";
import "../styles/gradientHover.css";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleThemeChange = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="bg-[#EEEEEE] dark:bg-black text-white pt-30 px-6 md:py-40 md:pt-62 md:px-6 md:gap-7 gap-0">
        <div className="mx-auto flex flex-col items-center justify-center md:flex-row w-full ">
          {/* Text Content */}
          <div className="flex flex-col text-left max-w-7xl md:pl-20">
            <HeroText isDarkMode={isDarkMode} />

            {/* Call to Action Button */}
            <div className="mt-4 flex flex-row items-center md:items-start gap-4">
              <div className={`titillium-web tracking-wide md:tracking-widest duration-300 bg-gradient-to-r from-[#8B5DFF] to-[#9d76ff] dark:from-violet-400 dark:to-violet-500 relative px-4 py-[5px] md:px-10 md:py-[10px] text-white hover:text-white font-semibold md:rounded-2xl rounded-lg overflow-hidden gradient-hover ${isDarkMode ? "gradient-dark" : "gradient-light"} `}>                
                <a href="/documents/AltafRaza.pdf" target="_blank" className="gradient-text text-[14px]">
                  Download Resume
                </a>
              </div>

              <div className={`titillium-web tracking-wide md:tracking-widest duration-300 relative md:px-10 md:py-[10px] px-4 py-[5px] hover:text-white text-black dark:text-white font-semibold md:rounded-2xl rounded-lg overflow-hidden gradient-hover shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[inset_0_0_10px_2px_rgba(255,255,255,0.6)] ${isDarkMode ? "gradient-dark" : "gradient-light"}`}>                
                <a onClick={() => scrollToSection("contact")} className="gradient-text hover:text-white text-[14px]">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>

          {/* Cube Animation */}
          <div className="lg:flex justify-center lg:w-[30%] hidden md:block sm:hidden">
            <div className="w-40 md:w-60 md:pl-20 lg:w-72">
              <Cube />
            </div>
          </div>
        </div>

        <div className="md:pt-6 pt-40 mx-auto">
          <ScrollIndicator />
        </div>
      </section>
      <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full mt-12 md:mb-0 mb-8" />
    </>
  );
};

export default Hero;