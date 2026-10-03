const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Small reveal animation when sections enter the screen.
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

sections.forEach((section) => observer.observe(section));
