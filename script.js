const toggleSwitch = document.querySelector('input[type="checkbox"]');

const getElementById = (id) => document.getElementById(id);

const nav = getElementById("nav");
const toggleIcon = getElementById("toggle-icon");
const image1 = getElementById("image1");
const image2 = getElementById("image2");
const image3 = getElementById("image3");
const textBox = getElementById("text-box");

// Dark or light images
function imageMode(type) {
  image1.src = `img/undraw_proud_coder_${type}.svg`;
  image2.src = `img/undraw_feeling_proud_${type}.svg`;
  image3.src = `img/undraw_conceptual_idea_${type}.svg`;
}

// Dark or light toggle
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dinamically
function switchTheme(event) {
  const checked = event.target.checked;
  document.documentElement.setAttribute(
    "data-theme",
    checked ? "dark" : "light"
  );
  localStorage.setItem("theme", checked ? "dark" : "light");
  toggleDarkLightMode(checked);
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Get theme from local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme && currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = true;
  toggleDarkLightMode(true);
}
