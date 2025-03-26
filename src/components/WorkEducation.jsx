import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getDarkMode } from "../utils/DarkMode";

const experiences = [
  {
    title: "Web Developer | Freelancing",
    company: "Freelance",
    date: "June 2024 - present",
    description: [
      "Develop custom websites for clients with optimized performance.",
      "Implement modern frontend and backend technologies for scalability.",
      "Ensure responsive, user-friendly designs tailored to client needs.",
    ],
    iconBg: "bg-[#322b52]",
    imgBG: "freelance.png",
  },
  {
    title: "Web Developer | Intern",
    company: "TrainingInbox",
    date: "Mar 2024 - June 2024",
    description: [
      "Managed the company website and developed new pages.",
      "Worked closely with UI/UX designers to implement precise designs.",
      "Enhanced website functionality and improved user experience.",
    ],
    iconBg: "bg-[#322b52]",
    imgBG: "trainingInbox.jpeg",
  },
];

const education = [
  {
    title: "Post Graduation | MCA",
    institution: "Lovely Professional University",
    date: "2023 -2025",
    description: [
      "Specialized in full-stack web development.",
      "Gained expertise in frontend, backend, and deployment.",
      "Built and optimized scalable web applications.",
    ],
    iconBg: "bg-[#322b52]",
    imgBG: "lpu.jpeg",
  },
  {
    title: "Graduation | BCA",
    institution: "Atal Bihari Vajpayee University",
    date: "2019 -2022",
    description: [
      "Studied core programming and computer science concepts.",
      "Focused on data structures, databases, web technologies, and design.",
      "Developed strong problem-solving and analytical skills.",
    ],
    iconBg: "bg-[#322b52]",
    imgBG: "abvv.png",
  },
];

const TimelineCard = ({ data, darkMode }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode ?   "#433878" : "#374151",
        color: darkMode ? "#000" : "#fff"  ,
        opacity: "95%",
      }}
      className="custom-timeline-element"
      contentArrowStyle={{
        borderRight: darkMode ? "10px solid #8B5DFF" : "10px solid #374151",
      }}
      date={<span className="md:text-[#000] dark:text-[#fff] tracking-wide text-md !opacity-100 font-bold">{data.date}</span>} // Change date color
      iconStyle={{
        background: darkMode ? "#322b52" : "white",
        color: darkMode ? "white" : "black",
        boxShadow: darkMode ? "0 0 0 5px #433878" : "0 0 0 5px #374151",
      }}
      icon={
        <div
          className={`w-full h-full flex items-center justify-center rounded-full ${
            darkMode
              ? "bg-[#322b52] text-white border-[#442588] shadow-[0_0_0_3px_white]"
              : data.iconBg
          }`}
        >
          <img src={`/${data.imgBG}`} className="rounded-full border-0" />
        </div>
      }
    >
      <h3 className="titillium-bold md:text-2xl text-xl tracking-wide mb-3 text-gray-100">
        {data.title}
      </h3>
      <span className="titillium-semi tracking-widest md:text-[18px] text-md text-gray-200">
        {data.company || data.institution}
        <hr className="h-[1px] bg-gradient-to-r dark:from-white dark:via-gray-400 dark:to-[#433878] from-white via-gray-400 to-[#374151] border-none w-3/4 mt-1" />
      </span>
      <ul className="ml-2 titillium-web mt-2 list-disc list-outside tracking-wide md:leading-10 md:text-[18px] text-[14px] leading-5 text-gray-100">
        {data.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkEducation = () => {
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

  return (
    <div
      className={`py-10 ${
        darkMode ? "dark:bg-black" : "bg-[#EEEEEE]"
      } pb-20 w-full overflow-hidden md:px-0 px-4`}
    >
      <motion.h2
        className="text-gray-700 dark:text-white text-3xl md:text-5xl font-medium text-center my-12 bg-[#EEEEEE] dark:bg-black pt-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
      >
        <div className="flex flex-col justify-center items-center mx-auto">
          Work & Education
          <hr className="h-[1px] bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-[#EEEEEE] via-gray-700 to-[#EEEEEE] border-none w-1/3 mt-4" />
        </div>
      </motion.h2>

      <div className="!w-full">
        <VerticalTimeline className="!max-w-7xl" lineColor={darkMode ? "#BBE1FA" : "#000"}>
          {experiences.map((exp, index) => (
            <TimelineCard key={index} data={exp} darkMode={getDarkMode()} />
          ))}
          {education.map((edu, index) => (
            <TimelineCard key={index} data={edu} darkMode={getDarkMode()} />
          ))}
        </VerticalTimeline>
      </div>
      <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full mt-24" />
    </div>
  );
};

export default WorkEducation;
