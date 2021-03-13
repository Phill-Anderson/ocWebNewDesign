class Modal {
  constructor(type) {
    this.type = type;
    this.injectHTML(type);
    this.modal = document.querySelector(".modal");
    this.openModalButtons = document.querySelectorAll(".open-modal");
    this.closeIcon = document.querySelector(".modal__close");

    this.signUpButton = document.getElementById('signUp');
    this.signInButton = document.getElementById('signIn');
    this.loginContainer = document.getElementById('loginContainer');

    this.events();
  }

  events() {
    // нээх товчлуур дарагдсан эсэхийг ажиглах
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openModal(e)));
    //Хаах товчлуур дарагдсан эсэхийг ажиглах
    this.closeIcon.addEventListener("click", () => this.closeModal());
    //Keyboard дээрээс ямар нэг товчлуур дарсан эсэхийг ажиглах
    document.addEventListener("keyup", e => this.keyPressHandler(e));

    this.signUpButton.addEventListener('click', () => this.loginContainer.classList.add("right-panel-active"));
    this.signInButton.addEventListener('click', () => this.loginContainer.classList.remove("right-panel-active"));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal(e) {
    e.preventDefault();
    this.modal.classList.add("modal--is-visible");
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML(type) {
    let modalContent = `<div class="loginContainer" id="loginContainer">
    <div class="form-container sign-up-container">
      <form action="#">
        <h3>Суралцагчаар бүртгүүлэх</h3>
        <input type="text" placeholder="нэр" />
        <input type="email" placeholder="и-мэйл" />
        <input type="number" placeholder="утасны дугаар" />
        <input type="password" placeholder="нууц үг" />
        <input type="password" placeholder="нууц үг давтана" />
        <button class="py10 px25">Бүртгүүлье</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form action="#">
        <h3>Нэвтрэх</h3>
        <input type="email" placeholder="и-мэйл" />
        <input type="password" placeholder="нууц үг" />
        <button class="py10 px25">Нэвтэрье</button>
        <a href="#" class="mdText pt20">Нууц үгээ мартсан?</a>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h3>Тавтай морил!</h3>
          <p>MVP.mn -д бүртгэлтэй бол и-мэйл, нууц үгээ оруулснаар суралцагчаар нэвтэрнэ</p>
          <button class="ghost px25 py10 signIn" id="signIn">Нэвтрэх</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h3>Өдрийн мэнд!</h3>
          <p>Та суралцагчаар бүртгүүлэх бол энд дарна уу</p>
          <button class="ghost py10 px25" id="signUp">Бүртгүүлэх</button>
        </div>
      </div>
    </div>
  </div>`;


    document.body.insertAdjacentHTML("beforeend",
      `<div class="modal">
          <div class="modal__inner">
              ${modalContent}
          </div>   
          <div class="modal__close">X</div>
        </div> `);
  }
}


export default Modal;
