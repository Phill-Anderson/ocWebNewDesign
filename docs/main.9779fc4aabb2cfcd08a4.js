!function(e){function n(n){for(var o,s,l=n[0],c=n[1],a=n[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(n);h.length;)h.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,l=1;l<t.length;l++){var c=t[l];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},i={0:0},r=[];function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var u=c;r.push([16,1]),t()}({16:function(e,n,t){"use strict";t.r(n);t(5),t(6);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".mobile-menu"),this.menuContent=document.querySelector(".mobileMenu_Layout"),this.siteHeader=document.querySelector(".header"),this.events()}var n,t,i;return n=e,(t=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleMenu()})),this.menuContent.addEventListener("click",(function(){return e.clickAnyPoint()}))}},{key:"toggleMenu",value:function(){this.menuContent.classList.toggle("mobile-menu__content--is-visible"),"block"===this.menuContent.style.display?this.menuContent.style.display="none":this.menuContent.style.display="block",this.siteHeader.classList.toggle("mobile-menu--is-expanded"),this.menuIcon.classList.toggle("mobile-menu--closed")}},{key:"clickAnyPoint",value:function(e){this.menuContent.style.display="none",this.menuContent.classList.contains("mobile-menu__content--is-visible")&&this.menuContent.classList.remove("mobile-menu__content--is-visible"),this.menuIcon.classList.contains("mobile-menu--closed")&&this.menuIcon.classList.remove("mobile-menu--closed"),this.siteHeader.classList.contains("mobile-menu--is-expanded")&&this.siteHeader.classList.remove("mobile-menu--is-expanded"),this.menuIcon.classList.contains("mobile-menu--closed")&&this.menuIcon.classList.remove("mobile-menu--closed")}}])&&o(n.prototype,t),i&&o(n,i),e}();function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=n,this.injectHTML(n),this.modal=document.querySelector(".modal"),this.openModalButtons=document.querySelectorAll(".open-modal"),this.closeIcon=document.querySelector(".modal__close"),this.signUpButton=document.getElementById("signUp"),this.signInButton=document.getElementById("signIn"),this.loginContainer=document.getElementById("loginContainer"),this.events()}var n,t,o;return n=e,(t=[{key:"events",value:function(){var e=this;this.openModalButtons.forEach((function(n){return n.addEventListener("click",(function(n){return e.openModal(n)}))})),this.closeIcon.addEventListener("click",(function(){return e.closeModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)})),this.signUpButton.addEventListener("click",(function(){return e.loginContainer.classList.add("right-panel-active")})),this.signInButton.addEventListener("click",(function(){return e.loginContainer.classList.remove("right-panel-active")}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeModal()}},{key:"openModal",value:function(e){e.preventDefault(),this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(e){document.body.insertAdjacentHTML("beforeend",'<div class="modal">\n          <div class="modal__inner">\n              '.concat('<div class="loginContainer" id="loginContainer">\n    <div class="form-container sign-up-container">\n      <form action="#">\n        <h3>Суралцагчаар бүртгүүлэх</h3>\n        <input type="text" placeholder="нэр" />\n        <input type="email" placeholder="и-мэйл" />\n        <input type="number" placeholder="утасны дугаар" />\n        <input type="password" placeholder="нууц үг" />\n        <input type="password" placeholder="нууц үг давтана" />\n        <button class="py10 px25">Бүртгүүлье</button>\n      </form>\n    </div>\n    <div class="form-container sign-in-container">\n      <form action="#">\n        <h3>Нэвтрэх</h3>\n        <input type="email" placeholder="и-мэйл" />\n        <input type="password" placeholder="нууц үг" />\n        <button class="py10 px25">Нэвтэрье</button>\n        <a href="#" class="mdText pt20">Нууц үгээ мартсан?</a>\n      </form>\n    </div>\n    <div class="overlay-container">\n      <div class="overlay">\n        <div class="overlay-panel overlay-left">\n          <h3>Тавтай морил!</h3>\n          <p>MVP.mn -д бүртгэлтэй бол и-мэйл, нууц үгээ оруулснаар суралцагчаар нэвтэрнэ</p>\n          <button class="ghost px25 py10 signIn" id="signIn">Нэвтрэх</button>\n        </div>\n        <div class="overlay-panel overlay-right">\n          <h3>Өдрийн мэнд!</h3>\n          <p>Та суралцагчаар бүртгүүлэх бол энд дарна уу</p>\n          <button class="ghost py10 px25" id="signUp">Бүртгүүлэх</button>\n        </div>\n      </div>\n    </div>\n  </div>','\n          </div>   \n          <div class="modal__close">X</div>\n        </div> '))}}])&&r(n.prototype,t),o&&r(n,o),e}(),l=t(4),c=t.n(l),a=t(1),u=t.n(a);function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".nav"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var n,t,o;return n=e,(t=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",c()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",u()((function(){console.log("Browser-ийг resize хийгдлээ."),e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.checkScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("nav--dark"):this.siteHeader.classList.remove("nav--dark"),this.pageSections.forEach((function(n){return e.calcSection(n)}))}},{key:"checkScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var n=e.getBoundingClientRect().y/this.browserHeight*100;if(n<18&&n>-.1&&"down"==this.scrollDirection||"up"==(n<33&&this.scrollDirection)){var t=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(t,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(t).classList.add("is-current-link")}}}}])&&d(n.prototype,t),o&&d(n,o),e}();new i,new h,document.querySelectorAll(".loginModal").forEach((function(e){e.addEventListener("click",new s("login"))})),document.querySelectorAll(".registerModal").forEach((function(e){e.addEventListener("click",new s("register"))}))},5:function(e,n,t){}});