import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaGithub,
} from "react-icons/fa";
import { getDarkMode } from "../utils/DarkMode";

const hoverCategoryData = {
  m5c: {
    title: "M5C Logistics Enterprise Projects",
    projects: [
      {
        id: "m5c-management",
        title: "M5C Logistics Management Software",
        tag: "Enterprise Suite",
        tagColor: "text-blue-400",
        btnBg: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30",
        mockup: "/mockup-m5c.png",
        stack: ["React", "Node", "PostgreSQL", "REST APIs"],
        liveUrl: "https://m5clogs.com/",
        githubUrl: null,
      },
      {
        id: "m5c-portal",
        title: "M5C Portal",
        tag: "Operations Portal",
        tagColor: "text-cyan-400",
        btnBg: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/30",
        mockup: "/mockup-m5c-portal.png",
        stack: ["React", "Vite", "REST APIs", "Tailwind"],
        liveUrl: "https://m5clogs.com/",
        githubUrl: null,
      },
      {
        id: "m5c-inventory",
        title: "Logistics Inventory Management",
        tag: "Warehouse ERP",
        tagColor: "text-indigo-400",
        btnBg: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30",
        mockup: "/mockup-m5c-inventory.png",
        stack: ["React", "Redux", "Node.js", "PostgreSQL"],
        liveUrl: "https://m5clogs.com/",
        githubUrl: null,
      },
    ],
  },
  freelance: {
    title: "Freelance Client Solutions",
    projects: [
      {
        id: "lawyer",
        title: "Advocate Pratik Tiwari - Legal Portfolio",
        tag: "Client Solution",
        tagColor: "text-emerald-400",
        btnBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30",
        mockup: "/mockup2.png",
        stack: ["React.js", "Tailwind CSS", "Vite", "AOS"],
        liveUrl: "https://www.pratiktiwari.in/",
        githubUrl: null,
      },
    ],
  },
  academic: {
    title: "Academic Capstone Projects (MCA)",
    projects: [
      {
        id: "eshop",
        title: "E-Shop Marketplace",
        tag: "MERN Stack",
        tagColor: "text-purple-400",
        btnBg: "bg-purple-600 hover:bg-purple-500 shadow-purple-600/30",
        mockup: "/mockup1.png",
        stack: ["MERN", "Redux", "JWT", "Tailwind"],
        liveUrl: "https://eshop-marketplace.vercel.app/",
        githubUrl: "https://github.com/Altafraza07/e-shop",
      },
      {
        id: "healthadvisor",
        title: "HealthAdvisor.AI",
        tag: "Gemini GenAI",
        tagColor: "text-purple-400",
        btnBg: "bg-purple-600 hover:bg-purple-500 shadow-purple-600/30",
        mockup: "/mockup3.png",
        stack: ["Gemini AI", "React", "Node", "JWT"],
        liveUrl: "https://healthadvisor-ai.onrender.com/",
        githubUrl: "https://github.com/Altafraza07/",
      },
    ],
  },
};

const Projects = ({ onSeeAll }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null); // 'm5c' | 'freelance' | 'academic' | null
  const [darkMode, setDarkMode] = useState(getDarkMode());
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleStorageChange = () => setDarkMode(getDarkMode());
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleMouseEnterCard = (cat) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredCategory(cat);
  };

  const handleMouseLeaveCard = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 350);
  };

  const handleMouseEnterModal = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const handleMouseLeaveModal = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 280);
  };

  const handleBrowseCategory = (cat) => {
    setHoveredCategory(null);
    if (onSeeAll) {
      onSeeAll(cat || "all");
    } else {
      window.location.hash = `#all-projects?category=${cat || "all"}`;
    }
  };

  return (
    <section className="py-20 bg-[#eeeeee] dark:bg-black px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="md:text-5xl text-3xl font-bold tracking-normal text-left text-gray-800 dark:text-white futura m-0">
              View My Work
            </h1>
            <div className="h-[2px] w-24 bg-gradient-to-r from-violet-500 to-[#8B5DFF] rounded-full mt-3 mb-2" />
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base titillium-web">
              Hover over each category below to preview projects. Click to browse all.
            </p>
          </div>

          <button
            onClick={() => handleBrowseCategory("all")}
            className="self-start md:self-end flex items-center gap-3 px-6 py-3 rounded-2xl text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#8B5DFF] to-[#6c3df0] hover:from-[#7b4be8] hover:to-[#5c2ee0] shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer titillium-web"
          >
            <span>Browse All Projects</span>
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* CARDS WRAPPER WITH APPLE-STYLE FLUID HOVER MODAL                          */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Ambient Lighting Behind Modal Area for High-Contrast Frosted Glass Blur */}
          <div className="absolute -top-32 left-1/4 w-[460px] h-48 bg-gradient-to-r from-violet-600/25 via-indigo-500/20 to-blue-500/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-[400px] h-44 bg-gradient-to-r from-cyan-500/20 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* FLOATING HOVER MODAL: DIRECT BACKDROP BLURRED CONTAINER */}
          <AnimatePresence>
            {hoveredCategory && hoverCategoryData[hoveredCategory] && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={handleMouseEnterModal}
                onMouseLeave={handleMouseLeaveModal}
                style={{
                  backdropFilter: "blur(36px)",
                  WebkitBackdropFilter: "blur(36px)",
                  backgroundColor: "rgba(20, 20, 24, 0.50)",
                }}
                className="absolute bottom-[calc(100%+16px)] left-0 right-0 z-50 w-full rounded-3xl border border-white/20 py-5 sm:py-6 px-5 sm:px-8 md:px-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-white overflow-hidden flex flex-col justify-center"
              >
                {/* Invisible Hover Bridge connecting modal to cards */}
                <div className="absolute -bottom-6 left-0 right-0 h-6 pointer-events-auto" />

                {/* 2-2 GRID (EXACTLY 2 PROJECTS PER ROW, AT MOST 4 VISIBLE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-3.5 sm:gap-y-4 items-center pb-2">
                  {hoverCategoryData[hoveredCategory].projects.slice(0, 4).map((proj) => (
                    <div
                      key={proj.id}
                      className="flex items-center justify-between gap-3.5 px-2 sm:px-2.5 py-1 rounded-2xl group/item transition-colors hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        {/* Mockup Frame without Inner Box */}
                        <div className="w-20 sm:w-24 md:w-28 lg:w-32 aspect-[16/10.5] flex-shrink-0 flex items-center justify-center">
                          <img
                            src={proj.mockup}
                            alt={proj.title}
                            className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-300 group-hover/item:scale-105"
                          />
                        </div>

                        {/* Title & Stack */}
                        <div className="text-left min-w-0">
                          <span className={`text-[11px] font-bold uppercase tracking-wider titillium-semi ${proj.tagColor}`}>
                            {proj.tag}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white titillium-bold leading-tight mt-0.5 truncate-2-lines">
                            {proj.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            <span className="text-[11px] text-gray-400 font-semibold titillium-semi mr-0.5">
                              Stack:
                            </span>
                            {proj.stack.map((t, i) => (
                              <span
                                key={i}
                                className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-gray-200 border border-white/10 font-medium titillium-web"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white shadow-md flex items-center gap-1.5 transition-all titillium-web ${proj.btnBg}`}
                          >
                            <span>Open</span>
                            <FaExternalLinkAlt className="text-[9px]" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            title="GitHub Repository"
                          >
                            <FaGithub className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Right Absolute: Browse All Projects */}
                <button
                  onClick={() => handleBrowseCategory(hoveredCategory)}
                  className="absolute bottom-3 right-5 sm:bottom-3.5 sm:right-6 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-violet-400/40 backdrop-blur-md shadow-md transition-all duration-200 cursor-pointer titillium-web group z-10"
                >
                  <span>Browse All Projects</span>
                  <FaArrowRight className="text-[9px] group-hover:translate-x-0.5 transition-transform" />
                </button>
            </motion.div>
          )}
        </AnimatePresence>

          {/* ============================================================== */}
          {/* THE 3 CATEGORIZATION CARDS (CLEAN IMAGE + LITTLE BIT OF TEXTS) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: M5C Logistics */}
            <div
              onMouseEnter={() => handleMouseEnterCard("m5c")}
              onMouseLeave={handleMouseLeaveCard}
              onClick={() => handleBrowseCategory("m5c")}
              className={`group relative rounded-3xl bg-white dark:bg-[#12111d] border transition-all duration-300 p-5 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between ${
                hoveredCategory === "m5c"
                  ? "border-blue-500 ring-2 ring-blue-500/20 shadow-blue-500/10"
                  : "border-gray-200 dark:border-white/10 hover:border-blue-400/40"
              }`}
            >
              <div>
                {/* Primary Visual Image Banner */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 mb-4 border border-gray-100 dark:border-white/5 shadow-inner">
                  <img
                    src="/mockup-m5c.png"
                    alt="M5C Logistics"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-md shadow-md">
                    <FaBuilding className="text-xs" />
                    <span>M5C Logistics</span>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    2025 - Present
                  </span>
                </div>

                {/* Minimal Text Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white titillium-bold group-hover:text-blue-500 transition-colors">
                    M5C Logistics
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 titillium-web mt-1">
                    Full Stack Developer • 3 Enterprise Projects
                  </p>
                </div>
              </div>

              <div className="px-2 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold titillium-semi">
                <span>Hover to preview 3 projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 2: Freelance Work */}
            <div
              onMouseEnter={() => handleMouseEnterCard("freelance")}
              onMouseLeave={handleMouseLeaveCard}
              onClick={() => handleBrowseCategory("freelance")}
              className={`group relative rounded-3xl bg-white dark:bg-[#12111d] border transition-all duration-300 p-5 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between ${
                hoveredCategory === "freelance"
                  ? "border-emerald-500 ring-2 ring-emerald-500/20 shadow-emerald-500/10"
                  : "border-gray-200 dark:border-white/10 hover:border-emerald-400/40"
              }`}
            >
              <div>
                {/* Primary Visual Image Banner */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 mb-4 border border-gray-100 dark:border-white/5 shadow-inner">
                  <img
                    src="/mockup2.png"
                    alt="Freelance Work"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-emerald-600/90 backdrop-blur-md shadow-md">
                    <FaBriefcase className="text-xs" />
                    <span>Freelance</span>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    Client Project
                  </span>
                </div>

                {/* Minimal Text Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white titillium-bold group-hover:text-emerald-500 transition-colors">
                    Freelance Work
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 titillium-web mt-1">
                    Advocate Pratik Tiwari Portfolio
                  </p>
                </div>
              </div>

              <div className="px-2 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold titillium-semi">
                <span>Hover to preview projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 3: Academic Projects */}
            <div
              onMouseEnter={() => handleMouseEnterCard("academic")}
              onMouseLeave={handleMouseLeaveCard}
              onClick={() => handleBrowseCategory("academic")}
              className={`group relative rounded-3xl bg-white dark:bg-[#12111d] border transition-all duration-300 p-5 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between ${
                hoveredCategory === "academic"
                  ? "border-purple-500 ring-2 ring-purple-500/20 shadow-purple-500/10"
                  : "border-gray-200 dark:border-white/10 hover:border-purple-400/40"
              }`}
            >
              <div>
                {/* Primary Visual Image Banner */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 mb-4 border border-gray-100 dark:border-white/5 shadow-inner">
                  <img
                    src="/mockup1.png"
                    alt="Academic Projects"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-purple-600/90 backdrop-blur-md shadow-md">
                    <FaGraduationCap className="text-xs" />
                    <span>Academic</span>
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    2 Projects
                  </span>
                </div>

                {/* Minimal Text Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white titillium-bold group-hover:text-purple-500 transition-colors">
                    Academic Projects
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 titillium-web mt-1">
                    E-Shop (MERN) & HealthAdvisor (AI)
                  </p>
                </div>
              </div>

              <div className="px-2 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-purple-600 dark:text-purple-400 font-semibold titillium-semi">
                <span>Hover to preview projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[1px] dark:bg-white/25 bg-black/25 border-none w-full max-w-7xl mx-auto mt-20" />
    </section>
  );
};

export default Projects;
