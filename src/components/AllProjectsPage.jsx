import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaThLarge,
} from "react-icons/fa";
import { getDarkMode } from "../utils/DarkMode";
import DarkMode from "./DarkMode";

const projectsList = [
  {
    id: "m5c-management",
    category: "m5c",
    categoryLabel: "Corporate / Enterprise",
    verticalText: "MANAGEMENT",
    verticalClass: "vertical-bt",
    layout: "left-mockup", // Left: Mockup, Right: Text
    title: "M5C Logistics Management Software",
    mockup: "mockup-m5c.png",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Tailwind",
      "PostgreSQL",
      "Docker",
    ],
    description:
      "Enterprise logistics operations suite engineered to coordinate freight movement, carrier dispatch, tracking status updates, and deep operations analytics across distributed logistics networks.",
    points: [
      "Automated carrier dispatch workflow and transit milestone forecasting.",
      "Comprehensive freight analytics with volumetric metrics and route performance trends.",
      "Centralized logistics scheduling and order processing pipelines.",
      "High-throughput REST APIs designed for scalability and enterprise security.",
      "Fully responsive and optimized for operational desktop workstations and command centers.",
    ],
    liveUrl: "https://m5clogs.com/",
    githubUrl: null,
    isConfidential: true,
  },
  {
    id: "m5c-portal",
    category: "m5c",
    categoryLabel: "Corporate / Enterprise",
    verticalText: "PORTAL",
    verticalClass: "vertical-tb",
    layout: "right-mockup", // Left: Text, Right: Mockup
    title: "M5C Portal",
    mockup: "mockup-m5c-portal.png",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
      "JWT Auth",
    ],
    description:
      "Unified self-service client and partner portal providing instant cargo visibility, active consignment tracking, digital documentation retrieval, and streamlined invoice review.",
    points: [
      "Client self-service interface for consignment lookup and live tracking milestones.",
      "Interactive freight map with real-time ETA and shipment status updates.",
      "Digital proof-of-delivery (POD) document management and billing history.",
      "High-performance, modern responsive frontend built with React and Vite.",
      "Enterprise role-based authentication and secure session management.",
    ],
    liveUrl: "https://m5clogs.com/",
    githubUrl: null,
    isConfidential: true,
  },
  {
    id: "m5c-inventory",
    category: "m5c",
    categoryLabel: "Corporate / Enterprise",
    verticalText: "INVENTORY",
    verticalClass: "vertical-bt",
    layout: "left-mockup", // Left: Mockup, Right: Text
    title: "Logistics Inventory Management",
    mockup: "mockup-m5c-inventory.png",
    techStack: [
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "PostgreSQL",
      "Tailwind",
      "REST APIs",
    ],
    description:
      "High-precision warehouse and inventory management system designed to monitor real-time stock levels, SKU turnover analytics, warehouse bay allocations, and multi-hub logistics audits.",
    points: [
      "Real-time multi-warehouse inventory monitoring across active storage facilities.",
      "Automated SKU turnover analytics and replenishment notification triggers.",
      "Interactive warehouse bay storage status heatmaps and allocation tracking.",
      "Detailed audit logging for inbound receipts, outbound dispatches, and transfers.",
      "Rich data visualization for inventory trends and supply chain forecasting.",
    ],
    liveUrl: "https://m5clogs.com/",
    githubUrl: null,
    isConfidential: true,
  },
  {
    id: "lawyer",
    category: "freelance",
    categoryLabel: "Freelance Project",
    verticalText: "REACT + Vite",
    verticalClass: "vertical-tb",
    layout: "right-mockup", // Left: Text, Right: Mockup
    title: "Advocate Pratik Tiwari - Portfolio",
    mockup: "mockup2.png",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJs",
      "Vite",
      "Tailwind",
      "AnimateOnScroll",
      "React-Slick",
      "Vercel",
      "Hostinger",
    ],
    description:
      "This is a professional portfolio website built for a lawyer client during a freelance project. It showcases their background, practice areas, testimonials, and contact form, designed to build trust and encourage client inquiries. The site is fully responsive and optimized for performance and accessibility.",
    points: [
      "Developed using React, TailwindCSS, and AnimateOnScroll.",
      "Fully responsive and cross-browser compatible layout.",
      "Professionally hosted on Vercel with custom domain from Hostinger.",
      "Smooth animations and clear content hierarchy for strong UX.",
      "Fast load times and SEO-friendly structure.",
    ],
    liveUrl: "https://www.pratiktiwari.in/",
    githubUrl: null,
    isConfidential: false,
  },
  {
    id: "eshop",
    category: "academic",
    categoryLabel: "Academic Project (LPU MCA)",
    verticalText: "MERN STACK",
    verticalClass: "vertical-bt",
    layout: "left-mockup", // Left: Mockup, Right: Text
    title: "E-Shop - A Local Marketplace",
    mockup: "mockup1.png",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind",
      "Vite",
      "Redux",
      "JsonWebToken",
      "Bcryptjs",
      "Vercel",
      "Lottie",
    ],
    description:
      "E-Shop is a fully functional e-commerce platform designed for a seamless online shopping experience. It features a user-friendly interface, a secure payment system, and an efficient product management dashboard.",
    points: [
      "Secure login/register with JWT authentication.",
      "Browse products with filtering, sorting, and search functionality.",
      "Manage products, orders, and users in a clean and intuitive UI.",
      "Users can view their purchase history and order statuses.",
      "Optimized for mobile and desktop users.",
    ],
    liveUrl: "https://eshop-marketplace.vercel.app/",
    githubUrl: "https://github.com/Altafraza07/e-shop",
    isConfidential: false,
  },
  {
    id: "healthadvisor",
    category: "academic",
    categoryLabel: "Academic Project (LPU MCA)",
    verticalText: "Gemini GenAI",
    verticalClass: "vertical-bt",
    layout: "right-mockup", // Left: Text, Right: Mockup
    title: "HealthAdvisorAI - A Smart Health Companion",
    mockup: "mockup3.png",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Vite",
      "Context API",
      "Lottie",
      "JsonWebToken",
      "Bcryptjs",
      "Tailwind",
      "Render",
      "Gemini's GenAI",
    ],
    description:
      "Health Advisor AI is an intelligent web application designed to provide users with personalized health advice and lifestyle tips. It features an interactive AI chatbot, secure authentication, and a clean, responsive user interface for a smooth and helpful wellness experience.",
    points: [
      "AI-powered health advice based on user input.",
      "Smart consultation interface for health and wellness queries.",
      "Secure login and registration with JWT authentication.",
      "Clean, responsive UI built with TailwindCSS and React.",
      "Easy to understand Health Reports in Hindi & English Language.",
    ],
    liveUrl: "https://healthadvisor-ai.onrender.com/",
    githubUrl: "https://github.com/Altafraza07/",
    isConfidential: false,
  },
];

const categoryTabs = [
  { key: "all", label: "All Projects", icon: FaThLarge },
  { key: "m5c", label: "M5C Logistics", icon: FaBuilding },
  { key: "freelance", label: "Freelance", icon: FaBriefcase },
  { key: "academic", label: "Academic", icon: FaGraduationCap },
];

const AllProjectsPage = ({ onBack, defaultCategory = "all" }) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [darkMode, setDarkMode] = useState(getDarkMode());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleStorageChange = () => setDarkMode(getDarkMode());
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#eeeeee] dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-28">
      {/* Sticky Header with Back Button */}
      <header className="sticky top-0 z-40 bg-[#eeeeee]/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-300 dark:border-zinc-800">
        <div className="max-w-[1675px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white bg-white/70 dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800 hover:border-violet-500/50 transition-all duration-200 cursor-pointer shadow-sm group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200 text-violet-500" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 titillium-semi">
              Categorized Projects Directory
            </span>
            <DarkMode />
          </div>
        </div>
      </header>

      {/* Title & Filter Tabs */}
      <div className="w-full max-w-[1675px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-12 pb-6">
        <h1 className="md:text-5xl text-3xl font-bold tracking-normal text-left text-gray-800 dark:text-white futura m-0">
          All Projects
          <hr className="h-[1px] bg-gradient-to-r from-gray-300 to-black dark:from-zinc-700 dark:to-white border-none w-1/3 mt-3" />
        </h1>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 shadow-sm w-fit">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.key;
            const count =
              tab.key === "all"
                ? projectsList.length
                : projectsList.filter((p) => p.category === tab.key).length;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold titillium-web transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md shadow-violet-500/25"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="browseActivePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#8B5DFF] to-[#6c3df0] rounded-xl z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="text-sm" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Feed with Left & Right Laptop Mockup Aesthetic */}
      <div className="w-full max-w-[1675px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mt-6">
        {filteredProjects.map((project, index) => {
          const isLeftMockup = project.layout === "left-mockup";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="border-b border-gray-300/60 dark:border-zinc-800/80 last:border-none"
            >
              {isLeftMockup ? (
                /* ================= Layout A: Left Mockup, Right Text ================= */
                <div className="flex flex-col sm:flex-row justify-center gap-12 md:gap-24 py-16 md:py-24 items-center">
                  {/* Left Mockup + Vertical Text + Dot */}
                  <div className="flex flex-row justify-center items-center w-full sm:w-auto md:gap-4">
                    <div className="flex flex-col items-center">
                      <h2 className="vertical-bt font-extralight text-xl md:text-4xl tracking-widest montserrat text-[#000] dark:text-white">
                        {project.verticalText}
                      </h2>
                      <img
                        src={darkMode ? "dot.png" : "blackdot.png"}
                        alt=""
                        className="md:w-[45%] w-[15px] mt-1 md:ml-2.5 ml-2"
                      />
                    </div>
                    <img
                      src={`/${project.mockup}`}
                      alt={project.title}
                      className="items-center md:w-[500px] lg:w-[600px] w-[350px] rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Right Text Content */}
                  <div className="md:flex md:flex-col block md:w-[35%] w-full text-left px-2 md:px-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-1 titillium-semi">
                      {project.categoryLabel}
                    </span>
                    <h1 className="font-bold text-2xl md:text-4xl mb-4 dark:text-gray-200 text-gray-700">
                      {project.title}
                    </h1>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="dark:bg-gray-800 dark:text-white bg-[#DBE2EF] text-gray-800 px-3 py-1 rounded-md text-sm font-medium titillium-web"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="md:text-[18px] text-[16px] font-medium titillium-web dark:text-gray-300 text-gray-700 text-left mb-3">
                      {project.description}
                    </p>

                    <ul className="md:text-[16px] text-[14px] list-disc titillium-web dark:text-gray-300 text-gray-700 text-left ml-5 space-y-1">
                      {project.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="md:mt-10 mt-6 flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="titillium-web tracking-widest duration-300 bg-gradient-to-r from-[#8B5DFF] to-[#9d76ff] dark:from-violet-400 dark:to-violet-500 px-6 py-[10px] text-white font-semibold rounded-2xl shadow-md hover:shadow-violet-500/30 flex items-center gap-2"
                        >
                          <span>Visit Site</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="titillium-web tracking-widest duration-300 px-6 py-[10px] text-black dark:text-white font-semibold rounded-2xl shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:bg-black/5 dark:hover:bg-white/10 flex items-center gap-2"
                        >
                          <FaGithub className="text-base" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span className="text-xs font-semibold px-4 py-2 rounded-xl text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-zinc-800 titillium-semi">
                          {project.isConfidential ? "Enterprise Portal" : "Client Project"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* ================= Layout B: Left Text, Right Mockup ================= */
                <div className="flex flex-col-reverse md:flex-row justify-center w-full gap-12 md:gap-24 py-16 md:py-24 items-center px-2 md:px-0">
                  {/* Left Text Content */}
                  <div className="flex flex-col w-full md:w-[35%] text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-1 titillium-semi">
                      {project.categoryLabel}
                    </span>
                    <h1 className="font-bold text-2xl md:text-4xl mb-4 dark:text-gray-200 text-gray-700">
                      {project.title}
                    </h1>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="dark:bg-gray-800 dark:text-white bg-[#DBE2EF] text-gray-800 px-3 py-1 rounded-md text-sm font-medium titillium-web"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="md:text-[18px] text-[16px] font-medium titillium-web dark:text-gray-300 text-gray-700 text-left mb-3">
                      {project.description}
                    </p>

                    <ul className="md:text-[16px] text-[14px] list-disc titillium-web dark:text-gray-300 text-gray-700 text-left ml-5 space-y-1">
                      {project.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="md:mt-10 mt-6 flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="titillium-web tracking-widest duration-300 bg-gradient-to-r from-[#8B5DFF] to-[#9d76ff] dark:from-violet-400 dark:to-violet-500 px-6 py-[10px] text-white font-semibold rounded-2xl shadow-md hover:shadow-violet-500/30 flex items-center gap-2"
                        >
                          <span>Visit Site</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="titillium-web tracking-widest duration-300 px-6 py-[10px] text-black dark:text-white font-semibold rounded-2xl shadow-[inset_0_0_0_2px_black] dark:shadow-[inset_0_0_0_2px_white] hover:bg-black/5 dark:hover:bg-white/10 flex items-center gap-2"
                        >
                          <FaGithub className="text-base" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span className="text-xs font-semibold px-4 py-2 rounded-xl text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-zinc-800 titillium-semi">
                          {project.isConfidential ? "Enterprise Portal" : "Client Project"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Mockup + Vertical Text + Dot */}
                  <div className="flex flex-row justify-center items-center w-full sm:w-auto md:gap-4">
                    <img
                      src={`/${project.mockup}`}
                      alt={project.title}
                      className="items-center md:w-[500px] lg:w-[600px] w-[350px] rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                    />
                    <div className="flex flex-col items-center md:items-start md:justify-end ml-4 md:ml-8">
                      <h2 className="vertical-tb font-extralight text-xl md:text-4xl tracking-widest montserrat text-[#000] dark:text-white">
                        {project.verticalText}
                      </h2>
                      <img
                        src={darkMode ? "dot.png" : "blackdot.png"}
                        alt=""
                        className="md:w-[65%] w-[15px] mt-1 md:ml-1"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjectsPage;
