document.addEventListener("DOMContentLoaded", () => {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  if (!sun || !moon) return;

  // set initial visibility based on current mode
  if (document.body.classList.contains("darkmode")) {
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    moon.style.display = "none";
    sun.style.display = "block";
  }

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
});
