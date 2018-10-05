"use strict";

window.addEventListener("DOMContentLoaded", init);

let moon = "";

function init() {
  console.log("init");

  let arrow = document.querySelector(".arrow");
  TweenMax.to(arrow, 1, { y: -10 });
  TweenMax.to(arrow, 1, { y: 0, delay: 1 });

  let moon = document.querySelector("#moon");
  TweenMax.to(moon, 8, { y: -500, x: 100, ease: Power1.easeOut, delay: 1 });
}
