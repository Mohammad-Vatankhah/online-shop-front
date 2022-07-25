twitter = document.querySelector(".twitter-logo");
instagram = document.querySelector(".instagram-logo");
telegram = document.querySelector(".telegram-logo");

function hover(element) {
  element.setAttribute(
    "src",
    "F:/shopping site/Shopping-Site/assets/images/" +
      element.className +
      "-gif.gif"
  );
}

function unhover(element) {
  element.setAttribute(
    "src",
    "F:/shopping site/Shopping-Site/assets/images/" + element.className + ".png"
  );
}

let navbar = document.querySelector("#navbar");
let toggle = document.querySelector(".toggle");

toggle.onclick = function () {
  navbar.classList.toggle("active");
  toggle.classList.toggle("active")
};
