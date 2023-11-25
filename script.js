const navToggle = document.querySelector("#nav-toggle")
const headerEl = document.querySelector("header")
const parentCircle = document.querySelector(".parent-circle")
const parentCircle2 = document.querySelector(".parent2-circle")
const navLi = document.querySelectorAll("nav li a")
const navBar = document.querySelector("nav")
const imgCont = document.querySelector("figure")

let isClicked = false
let clickCount = 0;

for(i=0; i<navLi.length; i++){
  navLi[i].addEventListener("click", function(){
    navToggle.checked = false
    headerEl.classList.add("newStyle-header")
  })
}

navToggle.addEventListener("click", function() {
    headerEl.classList.add("newStyle-header")
    parentCircle.classList.add("show")
    parentCircle.classList.remove("hide")
    parentCircle2.classList.add("show")
    parentCircle2.classList.remove("hide")
    clickCount++;
  if (clickCount === 2) {
    headerEl.style.transitionDelay = "1300ms"
    headerEl.style.transitionDuration = "800ms"
    parentCircle.classList.remove("show")
    parentCircle.classList.add("hide")
    parentCircle2.classList.remove("show")
    parentCircle2.classList.add("hide")
    console.log('Second click!');
    clickCount = 0;
  } else{
    headerEl.style.transitionDelay = "0ms"
  }
});