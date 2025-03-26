import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroText = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setAnimationKey((prev) => prev + 1);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center w-full pt-10 mb-4 md:mb-6 md:px-0">
      <div className="overflow-hidden w-full text-left">
        <div >
          <h1 className="text-[#313131e1] dark:text-white leading-normal text-4xl md:text-7xl font-extrabold futura md:leading-snug md:tracking-widest md:mb-0 mb-1">
            Hi,<br className="md:block hidden"/> I'm{" "} <br className="md:hidden"/>
            <span className="font-[montserrat] relative tracking-wider inline-block text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r dark:from-[#c09fe4] dark:via-[#ab97fd] dark:to-[#A294F9] from-[#6A42C2] via-[#8B5DFF] to-[#563A9C] animate-water-flow whitespace-nowrap">
              Altaf Raza 
            </span>
          </h1>

          <h1 className="text-[#313131e1] futura dark:text-white text-[1.8rem] md:text-7xl font-extrabold leading-tight md:tracking-widest mb-4 sm:mb-6">
            Full Stack Developer
          </h1>

          <p className="mt-5 md:mt-3 text-base text-[16px] md:text-2xl text-gray-600 dark:text-gray-400 tracking-wide mb-4 sm:mb-5 titillium-web">
            Crafting sleek, responsive web experiences that just feel right!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
