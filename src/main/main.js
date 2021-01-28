// contact toggle
const contactSection = document.querySelector(".contact-popup");
const closeBtn = document.querySelector(".contact-popup-close");
const contactBtn = document.querySelector(".nav-contact-btn");

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.style.display = "none";
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.style.display === "none"
    ? (contactSection.style.display = "block")
    : (contactSection.style.display = "none");
});

// hamburger
const hamburger = document.querySelector(".hamburger");
const lineTop = document.querySelector(".lineTop");
const lineMiddle = document.querySelector(".lineMiddle");
const lineBottom = document.querySelector(".lineBottom");
const hamburgerMenu = document.querySelector('.hamburger-menu');

const lines = [lineTop, lineMiddle, lineBottom];

const tl = gsap.timeline({ defaults: { ease: Power2.easeInOut } });

const toggleMenu = gsap.timeline({
  paused: true,
  reversed: true,
});

hamburger.addEventListener("mouseenter", (_) => {
  if (hamburger.classList.contains("js-cross")) {
    return;
  }
  tl.staggerTo(
    [lineTop, lineBottom],
    0.25,
    { scaleX: 1.2, repeat: 1, yoyo: true, ease: Power2.easeInOut },
    0.125
  );
});
toggleMenu
  .to(lineMiddle, 0.125, { scaleX: 0 })
  .to(
    lineTop,
    0.125,
    { rotation: 45, transformOrigin: "50% 50%", y: 7, ease: Power2.easeInOut, backgroundColor:"#ffffff" },
    "cross"
  )
  .to(
    lineBottom,
    0.125,
    {
      rotation: -45,
      transformOrigin: "50% 50%",
      y: -7,
      ease: Power2.easeInOut, backgroundColor:"#ffffff"
    },
    "cross"
  );

hamburger.addEventListener("click", (_) => {
  hamburger.classList.toggle("js-cross");
  hamburgerMenu.classList.toggle("showMenu");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
 

});
