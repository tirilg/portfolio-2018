"use strict";

window.addEventListener("DOMContentLoaded", init);

let moon = "";

function init() {
  console.log("init");

  let moon = document.querySelector("#moon");
  TweenMax.to(moon, 8, { y: -500, x: 100, ease: Power1.easeOut, delay: 1 });
}
