"use strict";

window.addEventListener("DOMContentLoaded", init);

let moon = "";

function init() {
  console.log("init");

  let moon = document.querySelector("#moon");
  TweenMax.to(moon, 8, { y: -500, x: 100, ease: Power1.easeOut, delay: 1 });

  ScrollReveal().reveal(".white-reveal", { delay: 300 });
  ScrollReveal().reveal(".blue-reveal", { delay: 300 });

  window.onscroll = function() {
    let navScrollMob = document.querySelector(".header");
    if (window.pageYOffset > 50) {
      navScrollMob.classList.add("navScroll");
    } else {
      navScrollMob.classList.remove("navScroll");
    }
  };
}
