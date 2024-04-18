let star = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let headert = document.querySelectorAll('header')



window.addEventListener('scroll', function () {
  let value = window.scrollY;
  star.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 0.2 + "px";
  btn.style.margiTop = value * 0.25 + "px";
  headert.style.margiTop = value * 4 + "px";


});