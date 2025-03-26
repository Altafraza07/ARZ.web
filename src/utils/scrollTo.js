export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const navbarHeight = 100; // Adjust based on your navbar height
    const offsetTop = section.offsetTop - navbarHeight;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
};