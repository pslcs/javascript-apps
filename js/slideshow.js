"use strict"

let x = 1;
let intervalas;
let nuotrauka;
let konteineris = document.querySelector('.konteineris');

function startSlides(){
    x = 1;
    runSlides();
    intervalas = setInterval( () => {runSlides()}, 3000);
}
startSlides();

function runSlides(){
    nuotrauka = "<img src='./assets/" + x + ".jpg'>";
    konteineris.innerHTML = nuotrauka
    console.log(nuotrauka);
    if(x == 5){
        x = 1
    } else {
        x++;
    }
}
function pauseSlides(){
    clearInterval(intervalas);
}
function continueSlides(){
    intervalas = setInterval( () => {runSlides()}, 3000)
}
function nextSlide(){
    if(x == 5){
        x = 1
    } else {
        x++;
    }
    nuotrauka = "<img src='./assets/" + x + ".jpg'>";
    konteineris.innerHTML = nuotrauka;
}
function previousSlide(){
    if(x == 1){
        x = 5
    } else {
        x--;
    }
    nuotrauka = "<img src='./assets/" + x + ".jpg'>";
    konteineris.innerHTML = nuotrauka;
}
