import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { getDarkMode } from "../utils/DarkMode";

const Projects = () => {
  const [darkMode, setDarkMode] = useState(getDarkMode());

  useEffect(() => {
    const handleStorageChange = () => {
      setDarkMode(getDarkMode());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const projects = [
    { eshop: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind"] },
    { lawyer: ["HTML", "CSS", "Javascript", "ReactJs", "AnimateOnScroll", "React-Sclick for Carousel", "Vercel"] },
    { new: ["Vue.js", "Firebase", "Bootstrap", "GraphQL"] },
  ];

  return (
    <div className="pb-4 bg-[#eeeeee] dark:bg-black px-4">
      <div className="flex flex-col justify-center text-center">
        <div className="w-full max-w-[1675px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <h1 className="md:text-5xl text-3xl font-bold tracking-normal text-left text-gray-700 dark:text-white z-10 md:py-2 pb-4 m-0 futura">
            View My Projects
            <hr className="h-[1px] bg-gradient-to-r from-gray-300 to-black border-none w-1/2 mt-3" />
          </h1>
        </div>

        {/* project 1 */}
        <div className=" flex flex-col sm:flex-row justify-center gap-25 md:mb-12 md:py-24 py-12">
          <div className="flex flex-row justify-center items-center w-full sm:w-auto md:gap-4">
            <div className="flex flex-col">
              <h2 className="vertical-bt font-extralight text-xl md:text-4xl tracking-widest montserrat text-[#000] dark:text-white">
                MERN STACK
              </h2>
              {darkMode ? (
                <img
                  src="dot.png"
                  alt=""
                  className="md:w-[45%] w-[15px] mt-1 md:ml-2.5 ml-2"
                />
              ) : (
                <img
                  src="blackdot.png"
                  alt=""
                  className="md:w-[45%] w-[15px] mt-1 md:ml-2.5 ml-2"
                />
              )}
            </div>
            <img
              src="mockup1.png"
              alt=""
              className="items-center md:w-[100%] w-[350px] rounded-lg"
            />
          </div>

          <div className="md:flex md:flex-col block md:w-[30%] w-full text-left px-2 md:px-0">
            <h1 className="font-bold text-2xl md:text-4xl mb-4  dark:text-gray-200 text-gray-700">
              E-Shop - A Local Marketplace
            </h1>

            <div className="space-y-4 m-0">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-wrap gap-2 mb-1">
                  {project.eshop?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="dark:bg-gray-800 dark:text-white bg-[#DBE2EF] text-gray-800 px-3 py-1 rounded-md text-sm m-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <p className="md:text-[18px] text-[16px] font-medium titillium-web dark:text-gray-300 text-gray-700 text-left mb-2">
              E-Shop is a fully functional e-commerce platform designed for a
              seamless online shopping experience. It features a user-friendly
              interface, a secure payment system, and an efficient product
              management dashboard.
            </p>
            <ul className="md:text-[16px] text-[14px] list-disc titillium-web dark:text-gray-300 text-gray-700 text-left ml-5">
              <li> Secure login/register with JWT authentication. </li>
              <li>
                Browse products with filtering, sorting, and search
                functionality.
              </li>
              <li>
                Manage products, orders, and users in a clean and intuitive UI.
              </li>
              <li>Users can view their purchase history and order statuses.</li>
              <li> Optimized for mobile and desktop users.</li>
            </ul>

            <div className="md:mt-12 mt-4 md:flex items-end">
              <div
                className={`titillium-web tracking-widest duration-300 bg-gradient-to-r from-[#8B5DFF] to-[#9d76ff] dark:from-violet-400 dark:to-violet-500 relative px-6 py-[10px] text-white hover:text-white font-semibold rounded-2xl overflow-hidden gradient-hover ${
                  darkMode ? "gradient-dark" : "gradient-light"
                } mr-6`}
              >
                <a
                  href="https://eshop-marketplace.vercel.app/"
                  target="_blank"
                  className="gradient-text titillium-web tracking-widest md:text-[16px] text-[14px]"
                >
                  Visit Site
                </a>
              </div>

              <div
                className={`titillium-web tracking-widest duration-300 relative px-6 py-[10px] gradient-hover hover:text-white text-black dark:text-white font-semibold rounded-2xl overflow-hidden gradient-hover shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[inset_0_0_10px_2px_rgba(255,255,255,0.6)] ${
                  darkMode ? "gradient-dark" : "gradient-light"
                }`}
              >
                <a
                  href="https://github.com/Altafraza07/e-shop"
                  target="_blank"
                  className="gradient-text titillium-web tracking-widest md:text-[16px] text-[14px]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
       <div className="flex flex-col-reverse md:flex-row justify-center w-full gap-8 md:mb-12 md:py-24 py-20 md:px-0 px-2">
  {/* Text Content */}
  <div className="flex flex-col w-full md:w-[35%] text-justify md:mr-5">
    <h1 className="font-bold text-2xl md:text-4xl mb-4 dark:text-gray-200 text-gray-700">
      Lawyer Portfolio Website
    </h1>
    <div className="space-y-4 m-0">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-wrap gap-2 mb-1">
          {project.lawyer?.map((tech, idx) => (
            <span
              key={idx}
              className="dark:bg-gray-800 dark:text-white bg-[#DBE2EF] text-gray-800 px-3 py-1 rounded-md text-sm m-0"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </div>

    <p className="md:text-[18px] text-[16px] font-medium titillium-web dark:text-gray-300 text-gray-700 text-left mb-2">
      This is a professional portfolio website built for a lawyer client during a freelance project. It showcases their background, practice areas, testimonials, and contact form, designed to build trust and encourage client inquiries. The site is fully responsive and optimized for performance and accessibility.
    </p>
    <ul className="md:text-[16px] text-[14px] list-disc titillium-web dark:text-gray-300 text-gray-700 ml-5">
      <li>Developed using React, TailwindCSS, and AnimateOnScroll.</li>
      <li>Fully responsive and cross-browser compatible layout.</li>
      <li>Professionally hosted on Vercel with custom domain from Hostinger.</li>
      <li>Smooth animations and clear content hierarchy for strong UX.</li>
      <li>Fast load times and SEO-friendly structure.</li>
    </ul>

    <div className="md:mt-12 mt-4 flex items-end">
      <div
        className={`titillium-web tracking-widest duration-300 bg-gradient-to-r from-[#8B5DFF] to-[#9d76ff] dark:from-violet-400 dark:to-violet-500 relative px-6 py-[10px] text-white hover:text-white font-semibold rounded-2xl overflow-hidden gradient-hover ${
          darkMode ? "gradient-dark" : "gradient-light"
        } mr-6`}
      >
        <a
          href="https://your-lawyer-site.vercel.app"
          target="_blank"
          className="gradient-text titillium-web tracking-widest md:text-[16px] text-[14px]"
        >
          Visit Site
        </a>
      </div>

      <div
        className={`titillium-web tracking-widest duration-300 relative px-6 py-[10px] gradient-hover hover:text-white text-black dark:text-white font-semibold rounded-2xl overflow-hidden gradient-hover shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[inset_0_0_10px_2px_rgba(255,255,255,0.6)] ${
          darkMode ? "gradient-dark" : "gradient-light"
        }`}
      >
        <a
          href="https://github.com/Altafraza07/lawyer-portfolio"
          target="_blank"
          className="gradient-text titillium-web tracking-widest md:text-[16px] text-[14px]"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>

  {/* Image + "ADVANCED JS" & Dots */}
  <div className="flex flex-row justify-center items-center md:items-start w-full md:w-[40%] md:gap-4">
    <img
      src="mockup2.png"
      alt="Lawyer Website"
      className="md:w-[100%] w-[350px] rounded-lg"
    />

    {/* Stack "ADVANCED JS" and dots only on mobile */}
    <div className="flex flex-col  items-center md:items-start md:justify-end ml-4 md:ml-8">
      <h2 className="vertical-tb font-extralight text-xl md:text-4xl tracking-widest montserrat text-[#000] dark:text-white">
        REACTJS
      </h2>
      {darkMode ? (
        <img
          src="dot.png"
          alt=""
          className="md:w-[65%] w-[15px] mt-1 md:ml-1"
        />
      ) : (
        <img
          src="blackdot.png"
          alt=""
          className="md:w-[65%] w-[15px] mt-1 md:ml-1"
        />
      )}
    </div>
  </div>
</div>

        {/* project 3 */}
      </div>
      <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full my-12" />
    </div>
  );
};

export default Projects;
