let dropdown = document.querySelectorAll(".dropdown");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let nav = document.querySelector(".inner-nav");
let overlay = document.querySelector(".overlay");
dropdown[0].addEventListener("mouseover", function () {
  dropdown[0].children[0].src = "images/icon-arrow-up.svg";
});
dropdown[0].addEventListener("mouseleave", function () {
  dropdown[0].children[0].src = "images/icon-arrow-down.svg";
});

dropdown[1].addEventListener("mouseover", function () {
  dropdown[1].children[0].src = "images/icon-arrow-up.svg";
});
dropdown[1].addEventListener("mouseleave", function () {
  dropdown[1].children[0].src = "images/icon-arrow-down.svg";
});


menu.addEventListener("click", function () {
    overlay.style.display = "block";
    nav.style.transform = `translateX(0%)`;
    nav.style.display = "flex";
    nav.style.opacity = 1;
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
        overlay.style.display = "none";
    nav.style.transform = `translateX(100%)`;
        nav.style.display = "none";
    nav.style.opacity = 0;
  close.style.display = "none";
  menu.style.display = "block";
});