const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

sun.addEventListener("click", () => {
  document.body.classList.add("darkmode");
  sun.style.display = "none";
  moon.style.display = "block";
});

moon.addEventListener("click", () => {
  document.body.classList.remove("darkmode");
  moon.style.display = "none";
  sun.style.display = "block";
});
