"use strict";

window.addEventListener("DOMContentLoaded", init);

let moon = "";

function init() {
  console.log("init");

  //let moon = document.querySelector("#moon");
  //TweenMax.to(moon, 5, { y: -300, x: 100, ease: Power1.easeInOut, delay: 1 });

  ScrollReveal().reveal(".white-reveal", { delay: 500 });
  ScrollReveal().reveal(".blue-reveal", { delay: 500 });

  window.onscroll = function() {
    let navScrollMob = document.querySelector(".header");
    if (window.pageYOffset > 50) {
      navScrollMob.classList.add("navScroll");
    } else {
      navScrollMob.classList.remove("navScroll");
    }
  };
}
