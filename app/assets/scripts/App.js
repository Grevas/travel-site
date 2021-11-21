import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}

/* Lesson example code below this line */
