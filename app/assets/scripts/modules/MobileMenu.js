class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".mobile-menu");
    this.menuContent = document.querySelector(".mobile-menu__content");
    this.siteHeader = document.querySelector(".header");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    this.menuContent.classList.toggle("mobile-menu__content--is-visible");
    if (this.menuContent.style.display === 'block') this.menuContent.style.display = "none"
    else this.menuContent.style.display = "block";
    this.siteHeader.classList.toggle("mobile-menu--is-expanded");
    this.menuIcon.classList.toggle("mobile-menu--closed");
  }
}

export default MobileMenu;
