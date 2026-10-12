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

const addEl = document.querySelectorAll(".add-btn")
let cart = JSON.parse(localStorage.getItem("cart")) || [];


addEl.forEach(btn => {
    btn.addEventListener("click", () => {
        let existing = cart.find(U => U.name === btn.dataset.name)
        if (existing) {
            existing.qty += 1
        }
        else {
            cart.push({ name: btn.dataset.name, price: Number(btn.dataset.price), qty: 1 })
        }
        renderCart()
        console.log(cart)
    })
})

function renderCart() {
    const itemList = document.querySelector("#cart-list")
    itemList.innerHTML = ""
    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - SR ${item.price} - ${item.qty}`;
        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+"
        plusBtn.addEventListener("click", () => {
            item.qty += 1;
            renderCart()
        })
        const negBtn = document.createElement("button");
        negBtn.textContent = "-";
        negBtn.addEventListener("click", () => {
            item.qty -= 1;
            if (item.qty === 0){
                cart = cart.filter(i => i !==item);
            }
            renderCart()
            })
        const Remove = document.createElement("button");
        Remove.textContent = "❌";
        Remove.addEventListener("click", () => {
            cart = cart.filter(i => i !== item);
            renderCart()
        })
        li.appendChild(Remove);
        li.appendChild(negBtn);
        li.appendChild(plusBtn);
        itemList.appendChild(li);

    })
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    let cartTotal = document.querySelector("#cart-total")
    cartTotal.textContent = `Total: SR ${total}`
    localStorage.setItem("cart", JSON.stringify(cart));


}
renderCart()