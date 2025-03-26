import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#563A9C] dark:bg-black text-white py-8">
    
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className=" flex flex-col md:flex-row justify-around items-center">
            <p className="dark:text-gray-300 text-[#dcd7d5] text-left text-sm md:text-lg"> &copy; {new Date().getFullYear()} Altaf Raza • All rights reserved.</p>

            <div className="flex space-x-6 my-4 md:my-0">
                <a href="https://www.instagram.com/arz.web/" target="_blank" className="dark:text-gray-300 text-[#dcd7d5] hover:text-white "> <FaInstagram className="w-6 h-6 md:w-8 md:h-8"/></a>
                <a href="https://www.linkedin.com/in/altafraza07/" target="_blank" className="dark:text-gray-300 text-[#dcd7d5] hover:text-white"> <FaLinkedin className="w-6 h-6 md:w-8 md:h-8"/></a>
                <a href="https://github.com/Altafraza07" target="_blank" className="dark:text-gray-300 text-[#dcd7d5] hover:text-white"> <FaGithub className="w-6 h-6 md:w-8 md:h-8"/></a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
