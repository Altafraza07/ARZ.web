export const setDarkMode = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  window.dispatchEvent(new Event("storage")); // 🔴 Force update across components
};
  
  export const getDarkMode = () => {
    return localStorage.getItem("theme") === "dark";
  };