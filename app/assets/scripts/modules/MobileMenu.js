class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".mobile-menu");
    this.menuContent = document.querySelector(".mobileMenu_Layout");
    this.siteHeader = document.querySelector(".header");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu());
    this.menuContent.addEventListener("click", () => this.clickAnyPoint());
  }

  toggleMenu() {
    this.menuContent.classList.toggle("mobile-menu__content--is-visible");
    if (this.menuContent.style.display === 'block')
      this.menuContent.style.display = "none"
    else
      this.menuContent.style.display = "block";
    this.siteHeader.classList.toggle("mobile-menu--is-expanded");
    this.menuIcon.classList.toggle("mobile-menu--closed");
  }
  clickAnyPoint(e) {
    this.menuContent.style.display = "none";
    if (this.menuIcon.classList.contains("mobile-menu--closed"))
      this.menuIcon.classList.remove("mobile-menu--closed");
  }
}

export default MobileMenu;
