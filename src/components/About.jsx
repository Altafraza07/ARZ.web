import React from "react";
import { FaDiscord, FaLinkedin, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const About = () => {
  return (
    <div className="dark:bg-black bg-[#EEEEEE] text-white md:py-18 relative mx-auto md:px-0 px-4">
      <div className="w-full md:max-w-[1675px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 dark:text-white text-[#1F2937]">
        <h2 className="md:text-5xl text-3xl font-bold tracking-normal text-left text-gray-700 dark:text-white z-10 md:py-2 md:pb-4 pb-2 m-0 futura">
          About Me
        </h2>
        <hr className="h-[1px] bg-gradient-to-r dark:from-gray-300 dark:to-black from-gray-700 to-[#EEEEEE] border-none w-1/3 md:mb-2" />

        <div className="flex flex-col-reverse md:flex-row md:justify-start justify-center items-start md:space-x-6 pb-12">
          {/* Left Side (Text) */}
          <div className="md:w-5/6 w-full md:text-lg text-[16px] md:leading-6.5 dark:text-gray-300 text-[#000] space-y-6 mt-4 titillium-web tracking-wide text-left md:text-justify">
            <p className=" md:block hidden">
              Hey, I’m Altaf Raza! A web developer passionate about building
              fast, intuitive, and scalable digital experiences. I love solving
              problems, optimizing code, and bringing ideas to life!
            </p>
            <p>
              What drives me? Innovation, efficiency, and a love for clean,
              maintainable code. I enjoy tackling challenges, learning new
              skills, and continuously improving to deliver the best possible
              solutions.
            </p>
            <p>
              My approach? Understand. Plan. Build. Optimize. Whether it’s
              designing intuitive interfaces or developing complex systems, I
              focus on creating high-quality experiences that make an impact.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new ideas, playing
              games, or hanging out on Discord .
            </p>
            <p className="font-semibold flex items-center space-x-4">
              <a
                href="mailto:altafraza.07work@gmail.com"
                className="flex items-center space-x-2 text-gray-700 dark:text-[#a17dfc] font-medium hover:underline"
              >
                <MdMail className="md:text-2xl text-lg" />
                <span className="dark:text-gray-300 text-[#636363] text-[14px] md:text-[16px]">
                  altafraza.07work@gmail.com
                </span>
              </a>

              <span className="dark:text-gray-400 text-gray-700 text-[14px] md:text-[16px]">|</span>

              <a
                href="https://linkedin.com/in/altafraza07"
                target="_blank"
                className="flex items-center space-x-2 text-gray-700 dark:text-[#a17dfc] font-medium hover:underline"
              >
                <FaLinkedin className="md:text-2xl text-lg" />
                <span className="dark:text-gray-300 text-[#636363] text-[14px] md:text-[16px]">
                  LinkedIn
                </span>
              </a>
            </p>
          </div>
          {/* Right Side (Photo) */}
          <div className="text-center md:w-1/3 w-full flex flex-col md:items-end md:self-end justify-center items-center mt-8 md:mt-0 relative">
            <div className="flex gap-4">
            <p className="md:hidden text-left text-[16px] titillium-web dark:text-gray-300 text-[#000] mb-4">
              Hey, I’m Altaf Raza! A web developer passionate about building
              fast, intuitive, and scalable digital experiences. I love solving
              problems, optimizing code, and bringing ideas to life!
            </p>
            <img
              src="/mypic.jpg"
              alt="Your Name"
              className=" md:border-none mx-auto border-b-4 border-r-4 border-white/75 w-48 h-48 md:w-80 md:h-90 rounded-lg object-cover shadow-lg z-2 md:mb-20"
            />
            </div>
            <div className="md:absolute hidden w-64 h-64 md:w-80 md:h-90 rounded-lg bg-gradient-to-t dark:from-[#ffffffb7] dark:via-[#fff] dark:to-[#fffce375] from-[#c3cad6] to-[#afb5c0] top-2 right-2 z-1 md:hidden lg:inline-block"></div>
          </div>
        </div>

        {/* Skills Section */}

        <h2 className="text-gray-700 dark:text-white text-2xl md:text-5xl font-medium text-center my-12 pt-4">
          The Skills, Tools & Technologies I Use
          <hr className="h-[1px] bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-[#EEEEEE] via-gray-700 to-[#EEEEEE] border-none w-f mx-auto mt-4" />
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20 w-full md:max-w-[1655px] mx-auto px-4 md:px-12 lg:px-20 xl:px-32 p-2 md:p-6 rounded-lg">
          {[
            "html.png",
            "css.png",
            "javascript.png",
            "react.png",
            "nodejs.png",
            "express.png",
            "restapi.png",
            "tailwind.png",
            "mongodb.png",
            "git.png",
            "redux.png",
          ].map((image, index) => (
            <div key={index} className="flex relative group">
              <div className="overflow-hidden jelly-hover flex flex-col items-center w-20 h-24 md:w-24 md:h-24  bg-gradient-to-br from-[#cedbf1d0] via-[#DBE2EF] to-[#cedbf1d0] dark:from-[#ffffffb7] dark:via-[#fff] dark:to-[#fffce375] dark:hover:from-[#fff] dark:hover:via-[#fff] dark:hover:to-[#fff]  p-2 rounded-lg hover:scale-110 !transition-transform duration-300 ease-in-out">
                <img
                  src={`/skills/${image}`}
                  alt={image.replace(".png", "")}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <p className="text-center text-[10px] md:text-sm text-black font-medium tracking-widest titillium-web md:hidden mt-1">
                {image.replace(".png", "").toUpperCase()}
              </p>
              </div>

              <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-white bg-black bg-opacity-60 px-1.5 py-0.5 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                {image.replace(".png", "").toUpperCase()}
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
