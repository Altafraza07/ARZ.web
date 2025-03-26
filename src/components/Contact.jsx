import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { getDarkMode } from "../utils/DarkMode";

const sendToWhatsApp = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phone = "+917477067959"; // Your WhatsApp number
  const text = encodeURIComponent(
    `Hey there! I'd love to connect with you. \nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
};

const sendToGmail = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(
    "Hey there! I'd love to connect with you."
  );
  const body = encodeURIComponent(
    `👤 Name: ${name}\n\n` +
      `📧 Email: ${email}\n\n` +
      `💬 Message: ${message}\n\n\n` +
      `Looking forward to your reply! `
  );

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=altafraza.07work@gmail.com&su=${subject}&body=${body}`,
    "_blank"
  );
};

const Contact = () => {

  const [darkMode, setDarkMode] = useState(getDarkMode());
  
    useEffect(() => {
      const handleThemeChange = () => {
        setDarkMode(getDarkMode()); // Update state when theme changes
      };
    
      window.addEventListener("storage", handleThemeChange);
      return () => window.removeEventListener("storage", handleThemeChange);
    }, []);
    


  return (
    <>
    <div className="relative dark:bg-black bg-[#F9F7F7] flex justify-center md:py-14 py-7">
      <div className="absolute text-center md:w-1/2 w-[70%] dark:bg-gradient-to-r from-[#6A42C2] via-[#6A42C2] to-[#6A42C2] bg-[#563A9C] mx-auto rounded-xl md:p-8 p-4 md:-top-14 -top-[45px] !z-49">
        <h2 className="font-light text-md  text-center md:text-3xl  font-[montserrat] text-white">
          Get in touch to create something unique.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row container mx-auto w-full md:items-start md:justify-between justify-center items-center md:mt-20 mt-15 gap-12">
        <div className="md:w-2/3 md:self-start">
          <h2 className="md:text-7xl text-2xl font-bold font-montserrat w-[100%] leading-tight tracking-wide md:font-medium animate-water-flow bg-clip-text text-transparent bg-gradient-to-r dark:from-gray-400 dark:via-gray-200 dark:to-gray-400 from-[#433d49] via-[#6d607e] to-[#374151]">
            Connect. Build. Thrive.
          </h2>

          <div className="md:mt-12">
            <div className="my-4 ">
              <FaEnvelope className="inline-block text-[#374151] md:w-[25px] md:h-[25px] w-[15px] h-[15px] dark:text-[#a17dfc] mr-2" />
              <a
                href="mailto:altafraza.07work@gmail.com"
                className="hover:underline titillium-web md:text-xl text-sm dark:text-white text-gray-600 px-1"
              >
                altafraza.07work@gmail.com
              </a>
            </div>
            <div className="mb-4 ">
              <FaPhone className="inline-block text-[#374151] md:w-[25px] md:h-[25px] w-[15px] h-[15px] dark:text-[#a17dfc] mr-2" />
              <span className="text-gray-600 titillium-web md:text-xl text-sm dark:text-white">
                +917477067959
              </span>
            </div>

            <div className="md:mb-4 ">
              <FaMapMarkedAlt className="inline-block text-[#374151] md:w-[25px] md:h-[25px] w-[15px] h-[15px] dark:text-[#a17dfc] mr-2" />
              <span className="text-gray-600 px-1 titillium-web md:text-xl text-sm dark:text-white">
                India{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <form className="space-y-4 md:w-[90%] w-[80%] text-gray-200">
            <div>
              <input
                id="name"
                type="text"
                className="w-full p-4 md:p-6 bg-[#374151] dark:bg-gray-600 rounded-xl md:text-2xl border dark:border-gray-800 border-black/25 font-light titillium-web focus:outline-none focus:border-violet-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <input
                id="email"
                type="text"
                className="w-full p-4 md:p-6 bg-[#374151] dark:bg-gray-600 rounded-xl md:text-2xl border dark:border-gray-800 border-black/25 font-light titillium-web focus:outline-none focus:border-violet-400"
                placeholder="Your Email"
              />
            </div>

            <div>
              <textarea
                id="message"
                type="text"
                className="w-full p-4 md:p-6 bg-[#374151] dark:bg-gray-600 rounded-xl md:text-2xl border dark:border-gray-800 border-black/25 font-light titillium-web focus:outline-none focus:border-violet-400"
                placeholder="Your Message"
                rows="5"
              />
            </div>
            <div className="md:hidden flex flex-col justify-center items-center mx-auto font-[montserrat] tracking-widest">
              <span className="text-gray-700 dark:text-gray-300">: Send Message Via :</span>
              </div>

            <div className="flex md:justify-end justify-center space-x-4">
              
              <button
                onClick={sendToWhatsApp}
                className={`flex items-center py-3 px-5 dark:text-white hover:text-white  gradient-hover transition-all gap-2 text-black font-semibold rounded-2xl overflow-hidden gradient-hover shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[inset_0_0_10px_2px_rgba(255,255,255,0.6)] ${
                  darkMode ? "gradient-dark" : "gradient-light"
                }`}
              >
                <img
                  src="/assets/whatsapp.png"
                  alt="whatsapp Logo"
                  className="md:w-[25px] md:h-[25px] w-[15px] h-[15px] gradient-text"
                />
                <span className="titillium-web tracking-wide gradient-text text-sm md:text-xl font-light whitespace-nowrap justify-center shadow-2xl">
                  <span className="md:inline hidden">Send via</span> Whatsapp
                </span>
              </button>

              <button
                onClick={sendToGmail}
                className={`flex items-center py-3 px-5 dark:text-white hover:text-white  gradient-hover transition-all gap-2 text-black font-semibold rounded-2xl overflow-hidden gradient-hover shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[inset_0_0_10px_2px_rgba(255,255,255,0.6)] ${
                  darkMode ? "gradient-dark" : "gradient-light"
                }`}
                >
                <img
                  src="/assets/gmail.png"
                  alt="Gmail Logo"
                  className="md:w-[25px] md:h-[25px] w-[15px] h-[15px] gradient-text shadow-2xl"
                />
                <span className="titillium-web tracking-wide gradient-text text-sm md:text-xl font-light whitespace-nowrap justify-center shadow-2xl">
                  <span className="md:inline hidden">Send via</span> E-mail
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full z-1" />
    </>
  );
};

export default Contact;
