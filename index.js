let menuBtn = document.querySelector(".menu-btn");
let navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuBtn.textContent = navList.classList.contains("open") ? "✕" : "☰";
});

const form = document.querySelector("#booking-form");
const formMsg = document.querySelector("#form-msg");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const guests = document.querySelector("#guests").value;
    const today = new Date().toISOString().slice(0, 10);
    const openingTime = "15:00";
    const closingTime = "23:59";

    if (date < today) {
        formMsg.textContent = "Please choose a date from today onward.";
        formMsg.style.color = "red";
        return;
    }
    if (time > closingTime || time < openingTime) {
        formMsg.textContent = "Please choose a time between 3:00 PM and 12:00 AM.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = `Thanks ${name}! Your table for ${guests} is booked on ${date} at ${time}.`;
    formMsg.style.color = "green";
    form.reset();
});
