class LoginForm {
    constructor() {
        this.signUpButton = document.getElementById('signUp');
        this.signInButton = document.getElementById('signIn');
        this.loginContainer = document.getElementById('loginContainer');
        this.events();
    }
    events() {
        this.signUpButton.addEventListener('click', () => loginContainer.classList.add("right-panel-active"));
        this.signInButton.addEventListener('click', () => this.loginContainer.classList.remove("right-panel-active"));
    }
}
export default LoginForm;