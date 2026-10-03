let u = document.querySelector(".menu-btn");
let v = document.querySelector("nav ul");
u.addEventListener("click", () => {
    v.classList.toggle("open");
});
