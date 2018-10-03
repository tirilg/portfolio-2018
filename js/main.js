"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  ScrollReveal().reveal(".white-reveal", { delay: 300 });
  ScrollReveal().reveal(".blue-reveal", { delay: 300 });

  window.onscroll = function() {
    const navScrollBg = document.querySelector(".header");
    if (window.pageYOffset > 50) {
      navScrollBg.classList.add("navScroll");
    } else {
      navScrollBg.classList.remove("navScroll");
    }
  };
}
