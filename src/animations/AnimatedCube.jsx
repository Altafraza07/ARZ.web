import React, { useState, useEffect } from "react";
import "../styles/cube.css"
import { getDarkMode } from "../utils/DarkMode";

const Cube = () => {

   const [darkMode, setDarkMode] = useState(getDarkMode());
  
    useEffect(() => {
      const handleThemeChange = () => {
        setDarkMode(getDarkMode()); // Update state when theme changes
      };
    
      window.addEventListener("storage", handleThemeChange);
      return () => window.removeEventListener("storage", handleThemeChange);
    }, []);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (dragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 0.3,
        y: prev.y + 0.7,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, [dragging]);

  const startDrag = (x, y) => {
    setDragging(true);
    setPrevMouse({ x, y });
  };

  const handleMouseMove = (x, y) => {
    if (!dragging) return;
    const deltaX = x - prevMouse.x;
    const deltaY = y - prevMouse.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.3,
      y: prev.y + deltaX * 0.3,
    }));

    setPrevMouse({ x, y });
  };

  const handleMouseUp = () => setDragging(false);

  const faces = [
    { text: "Design", image: "/cube-face/design.png" , bgImage: "/magma.gif" },
    { text: "Fast", image: "/cube-face/fast.png", bgImage: "/magma.gif" },
    { text: "Responsive", image: "/cube-face/responsive.png", bgImage: "/magma.gif" },
    { text: "Secure", image: "/cube-face/secure.png"        , bgImage: "/magma.gif" },
    { text: "S.E.O", image: "/cube-face/seo.png"     , bgImage: "/magma.gif" },
    { text: "UX", image: "/cube-face/user.png"   , bgImage: "/magma.gif" },
  ];

  return (
    <div
      className="cube-container"
      onMouseMove={(e) => handleMouseMove(e.clientX, e.clientY)}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => handleMouseMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleMouseUp}
    >
      <div
        className={`cube ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {faces.map((face, index) => (
          <div key={index} className={`bg-[#EEEEEE] dark:bg-black tracking-widest cube-face ${darkMode ? "cube-face-dark" : "cube-face-light"} cube-face-${index}`}
          //style={{ backgroundImage: `url(${face.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
          <div className=" w-[99%] h-[99%]  flex flex-col items-center justify-center text-center p-2">
              {/* <div className="rounded-full animate-water-flow flex flex-col items-center justify-center w-[90%] h-[90%] leading-tight bg-gradient-to-tr from-[#0000005b] via-[#5c5c5c52] to-[#0000005b] p-4"> */}
              {/* <img src={face.image} alt={face.text} className="w-16 h-16 mb-2 object-contai select-none pointer-events-none" /> */}
              <span className="text-3xl bonheur tracking-widest dark:text-white text-gray-700">{face.text}</span>
              {/* </div> */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cube;
