import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./index.css"
import { LoadingScreeen } from './animations/LoadingScreeen'
import { useState } from 'react'
import WorkEducation from './components/WorkEducation'
import Testimonials from './components/Testimonial'





function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='!scroll-smooth'>
    {!isLoaded && <LoadingScreeen onComplete={() => setIsLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ease-in-out bg-[#EEEEEE] dark:bg-black
      ${isLoaded ? "opacity-100" : "opacity-0"} `}>
      
      <Navbar/>
        <div id="home" ><Hero /></div>
        <div id="aboutme" ><About /></div>
        <div id="services"><WorkEducation /></div>
        <div id="projects"><Projects /></div>
        <div id="testimonials"><Testimonials/></div>
        <div id="contact"><Contact /></div>
        <Footer />   
    </div>
    </div>
  )
}

export default App
