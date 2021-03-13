import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import Modal from "./modules/Modal";

new MobileMenu();

let loginBtns = document.querySelectorAll(".loginModal");
loginBtns.forEach(el => {
  el.addEventListener("click", new Modal('login'));
});

let registerBtns = document.querySelectorAll(".registerModal");
registerBtns.forEach(el => {
  el.addEventListener("click", new Modal('register'));
});



if (module.hot) {
  module.hot.accept();
}
