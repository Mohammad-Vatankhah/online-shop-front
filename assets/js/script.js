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
  toggle.classList.toggle("active");
};

//product page gallery
var main_img = document.getElementById("main-img");
var small_img = document.getElementsByClassName("small-img");
console.log(small_img);

small_img[0].onclick = function(){
  main_img.src = small_img[0].src;
}

small_img[1].onclick = function(){
  main_img.src = small_img[1].src;
}

small_img[2].onclick = function(){
  main_img.src = small_img[2].src;
}

small_img[3].onclick = function(){
  main_img.src = small_img[3].src;
}