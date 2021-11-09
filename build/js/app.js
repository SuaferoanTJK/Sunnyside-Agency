const btnHamburger = document.querySelector("#btn-Hamburger");
const nav = document.querySelector(".navigation");

btnHamburger.addEventListener("click", ()=> {
    nav.classList.toggle("show");
});