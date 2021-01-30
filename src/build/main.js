"use strict";

// contact toggle
var contactSection = document.querySelector(".contact-popup");
var closeBtn = document.querySelector(".contact-popup-close");
var contactBtn = document.querySelector(".nav-contact-btn");
var sideContactBtn = document.querySelector('.side-contact-btn');

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contactSection.style.display = "none";
});

var togglePopupContact = function togglePopupContact(e) {
  e.preventDefault();
  contactSection.style.display === "none" ? contactSection.style.display = "block" : contactSection.style.display = "none";
};
contactBtn.addEventListener("click", togglePopupContact);
sideContactBtn.addEventListener('click', togglePopupContact);

// hamburger
var hamburger = document.querySelector(".hamburger");
var lineTop = document.querySelector(".lineTop");
var lineMiddle = document.querySelector(".lineMiddle");
var lineBottom = document.querySelector(".lineBottom");
var hamburgerMenu = document.querySelector('.hamburger-menu');

var lines = [lineTop, lineMiddle, lineBottom];

var tl = gsap.timeline({ defaults: { ease: Power2.easeInOut } });

var toggleMenu = gsap.timeline({
  paused: true,
  reversed: true
});

hamburger.addEventListener("mouseenter", function (_) {
  if (hamburger.classList.contains("js-cross")) {
    return;
  }
  tl.staggerTo([lineTop, lineBottom], 0.25, { scaleX: 1.2, repeat: 1, yoyo: true, ease: Power2.easeInOut }, 0.125);
});
toggleMenu.to(lineMiddle, 0.125, { scaleX: 0 }).to(lineTop, 0.125, { rotation: 45, transformOrigin: "50% 50%", y: 7, ease: Power2.easeInOut, backgroundColor: "#ffffff" }, "cross").to(lineBottom, 0.125, {
  rotation: -45,
  transformOrigin: "50% 50%",
  y: -7,
  ease: Power2.easeInOut, backgroundColor: "#ffffff"
}, "cross");

hamburger.addEventListener("click", function (_) {
  hamburger.classList.toggle("js-cross");
  hamburgerMenu.classList.toggle("showMenu");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});