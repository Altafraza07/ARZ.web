import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";
import "../styles/testimonials.css"
import { getDarkMode } from "../utils/DarkMode";


const testimonials = [
  {
    name: "Sarveshwer Dahre",
    quote: "Altaf has been an inspiration since our BCA days. His proficiency in web development and willingness to help others truly stand out. He introduced me to the basics and motivated me with his projects when I was starting my full-stack journey. A talented, kind, and supportive friend!",
    designation: "Research Scholar at NIT Raipur",
    location: "Raipur | IN",
    img: "/testimonial/sarvesh.jpeg",
    linkedin: "https://www.linkedin.com/in/jzedee/",
  },
  {
    name: "Adeeb Quraishi",
    quote: "Working with Altaf was a great experience. His expertise, reliability, and problem-solving skills always stood out. His work speaks for itself!",
    designation: "Operations Representative at Concentrix",
    location: "Guragram | IN",
    img: "/testimonial/adeeb.jpeg",
    linkedin: "https://www.linkedin.com/in/adeebquraishi11/",
  },
  {
    name: "Akash Jain",
    quote:
      "An exceptionally talented and knowledgeable professional with a deep understanding of the projects he undertakes, ensuring well-executed and innovative solutions.",
    designation: "QA Test Engineer at DianApps",
    location: "Jaipur | IN",
    img: "/testimonial/akash.jpg",
    linkedin: "https://www.linkedin.com/in/jaintalman/",
  },
  // {
  //   name: "Aman Raza",
  //   quote: "Very professional and skilled!",
  //   designation: "Senior software Engineer at LTIMindtree",
  //   location: "Hyderabad | IN",
  //   img: "/testimonial/aman.jpg",
  //   linkedin: "https://www.linkedin.com/in/aman-raza-16263b166/",
  // },
  {
    name: "Aryan Sharma",
    quote: "Working with Altaf on projects was a great experience. His expertise, creativity, and problem-solving skills stood out, making every project smooth and successful. I have no hesitation in recommending him.",
    designation: "Web Development Intern at SpiTech",
    location: "Bilaspur | IN",
    img: "/testimonial/aryan.jpg",
    linkedin: "https://www.linkedin.com/in/aryanastic/",
  },
  {
    name: "Deepesh Verma",
    quote:
      "Altaf is a skilled web developer who turns complex ideas into seamless, high-performing applications. Professional, creative, and detail-oriented. I highly recommend him.",
    designation: "FullStack Web Developer",
    location: "Bilaspur | IN",
    img: "/testimonial/deepesh.jpg",
    linkedin: "https://www.linkedin.com/in/deepeshverma12/",
  },
];

const Testimonials = () => {

  const [darkMode, setDarkMode] = useState(getDarkMode());

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(getDarkMode()); // Update state when theme changes
    };
  
    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);
  
  useEffect(() => {
    setDarkMode(getDarkMode()); // Update on component mount
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
    <div className="dark:bg-black bg-[#EEEEEE] py-10 md:pb-32" >
      <div className="w-full max-w-[1675px] flex flex-col justify-center items-center mx-auto px-2 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <h1 className="md:text-5xl text-3xl font-bold tracking-normal text-center text-gray-700 dark:text-white z-10 md:py-2 pb-4 m-0 futura">
          What People Say
        </h1>
        <hr className="h-[1px] bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-[#EEEEEE] via-gray-700 to-[#EEEEEE] border-none w-1/2 mt-2" />
      </div>
      <div className={`md:w-[80%] w-full testimonial-carousel-container mx-auto py-12 pb-30 ${darkMode ? "testimonial-carousel-dark" : "testimonial-carousel-light"}`}>
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="testimonial-slide flex p-6 items-center justify-center"
            >
              <div className="testimonial-card dark:bg-[#000] bg-[#F9F7F7] p-6 rounded-xl md:max-w-xl shadow-md relative md:min-h-[400px] flex flex-col border-[0.5px] dark:border-white/50 border-black/25">
                <div className="text-center">
                  {test.linkedin ? (
                    <a
                      href={test.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-profile flex items-center gap-1 text-gray-200 absolute left-4 top-4 md:text-[14px] text-[10px] z-50 bg-[#363636d2] px-2 py-1 rounded-md shadow-md"
                    >
                      <FaLinkedin className="inline text-sm" />
                      <em>Visit Profile</em>
                    </a>
                  ) : (
                    <div className="absolute left-4 top-4 dark:text-gray-600 text-gray-800 text-xs">
                      #
                    </div>
                  )}

                  <img
                    src={test.img}
                    alt={test.name}
                    className="testimonial-img mx-auto w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-full"
                  />
                  
                  <p className="testimonial-quote italic md:text-lg text-xs my-6 dark:text-gray-300 text-gray-700">
                    <span className="futura md:text-2xl text-lg leading-1 text-violet-400">
                      “{" "}
                    </span>
                    {test.quote}
                    <span className="futura md:text-2xl text-lg leading-1 text-violet-400">
                      {" "}
                      ”
                    </span>
                    <hr className="h-[1px] bg-gradient-to-r from-[#fff0] via-[#fff] to-[#fff0] border-none w-1/2 mt-4 mx-auto" />
                  </p>
                </div>

                <div className="mt-auto text-end md:text-sm text-xs">
                  <h3 className="testimonial-name font-medium mt-6 inline dark:text-gray-300 text-gray-700">
                    {test.name},{" "}
                    <em className="font-extralight dark:text-gray-400 text-gray-950">
                      {test.designation}
                    </em>
                  </h3>
                  <h6 className="testimonial-location font-medium md:text-sm text-xs block dark:text-gray-300 text-gray-700">
                    {test.location}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full z-1" />

    </>
  );
};

export default Testimonials;
