# ☕ Brew & Bean — Café Landing Page

A fully responsive landing page for a specialty café, featuring a menu with an online
ordering cart and a table-booking form with real-time validation.

**🔗 Live demo:** https://ahmed71huz.github.io/Brew-and-bean-cafe/

![Screenshot](images/screenshot.png)
![Cart](images/cart.png)

## Features
- Responsive, mobile-first layout (Flexbox + CSS Grid)
- Semantic, accessible HTML (labels, alt text, landmarks)
- Mobile navigation menu
- Booking form with custom validation and inline error messages
- Success confirmation message
- Smooth slide-down mobile menu (☰ / ✕)
- Booking form checks: no past dates, only within opening hours (3 PM – 12 AM)
- Full-width hero section

## Tech Stack
HTML5 · CSS3 · Vanilla JavaScript · GitHub Pages

## Cart Features
- Add items from the menu
- Merge duplicates and increase quantity
- +/− buttons and remove ❌
- Line totals and cart total
- Item count badge in the nav
- Dine-in / Takeaway choice at checkout
- Cart saved with localStorage (stays after refresh)

## Run Locally
1. Clone the repo: `git clone https://github.com/ahmed71huz/Brew-and-bean-cafe.git`
2. Open `index.html` in your browser (or use the VS Code Live Server extension).

## What I Learned
- Structuring a page with semantic HTML
- Building responsive layouts with Flexbox, Grid and media queries
- Handling DOM events and validating forms with JavaScript
- Using Git and deploying with GitHub Pages
- Storing the cart as an array of objects (`{ name, price, qty }`) and re-rendering the UI from that state
- Using `find` to merge duplicate items and `filter` to remove them
- Calculating totals and item counts with `reduce`
- Saving and loading data with `localStorage` + `JSON.stringify` / `JSON.parse`
- Reading the selected radio button with the `:checked` selector
- Writing small helper functions that `return` a value (`lineTotal`, `getTotal`) to keep the code DRY
