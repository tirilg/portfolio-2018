"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  //ScrollReveal({ reset: true });
  ScrollReveal().reveal(".white-reveal", { delay: 300, reset: true });
  ScrollReveal().reveal(".blue-reveal", { delay: 300, reset: true });
  ScrollReveal().reveal(".container", { delay: 100 });
  ScrollReveal().reveal(".image-text", { delay: 300 });

  window.onscroll = function() {
    const navScrollBg = document.querySelector(".header");
    if (window.pageYOffset > 50) {
      navScrollBg.classList.add("navScroll");
    } else {
      navScrollBg.classList.remove("navScroll");
    }
  };
}
