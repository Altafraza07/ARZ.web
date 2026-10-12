import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./index.css"
import { LoadingScreeen } from './animations/LoadingScreeen'
import { useState, useEffect } from 'react'
import WorkEducation from './components/WorkEducation'
import Testimonials from './components/Testimonial'
import AllProjectsPage from './components/AllProjectsPage'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#all-projects")) {
        const queryIndex = hash.indexOf("?");
        if (queryIndex !== -1) {
          const params = new URLSearchParams(hash.substring(queryIndex + 1));
          setActiveCategory(params.get("category") || "all");
        } else {
          setActiveCategory("all");
        }
        setCurrentView("all-projects");
      } else {
        setCurrentView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenAllProjects = (category = "all") => {
    setActiveCategory(category);
    setCurrentView("all-projects");
    window.location.hash = category !== "all" ? `#all-projects?category=${category}` : "#all-projects";
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    window.location.hash = "#projects";
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className='!scroll-smooth'>
      {!isLoaded && <LoadingScreeen onComplete={() => setIsLoaded(true)} />}

      {currentView === "all-projects" ? (
        <AllProjectsPage
          onBack={handleBackToHome}
          defaultCategory={activeCategory}
        />
      ) : (
        <div className={`min-h-screen transition-opacity duration-700 ease-in-out bg-[#EEEEEE] dark:bg-black
          ${isLoaded ? "opacity-100" : "opacity-0"} `}>
          
          <Navbar/>
          <div id="home"><Hero /></div>
          <div id="aboutme"><About /></div>
          <div id="services"><WorkEducation /></div>
          <div id="projects"><Projects onSeeAll={handleOpenAllProjects} /></div>
          <div id="testimonials"><Testimonials/></div>
          <div id="contact"><Contact /></div>
          <Footer />   
        </div>
      )}
    </div>
  )
}

export default App
