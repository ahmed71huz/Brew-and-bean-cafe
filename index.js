let menuBtn = document.querySelector(".menu-btn");
let navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuBtn.textContent = navList.classList.contains("open") ? "✕" : "☰";
});


