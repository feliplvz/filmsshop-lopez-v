// Función Toggler del hamburger menu.
export const toggle = () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
};

export const linkToggle = () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.classList.remove("active");
  menu.classList.remove("active");
};
