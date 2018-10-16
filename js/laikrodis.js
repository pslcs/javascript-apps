"use strict"

let sukinys = document.querySelector('#second');
let sukinys2 = document.querySelector('#minute');
let x;
let y;
let intervalas;

function startClock(){
    y = 0;
    x = 6;
    intervalas = setInterval( () => {runClock()}, 1000);
}

function runClock(){
    let kiekPasukt2 = 'rotate(' + y + 'deg)';
    let kiekPasukt = 'rotate(' + x + 'deg)';
    sukinys.style.transform = kiekPasukt;
    sukinys2.style.transform = kiekPasukt2;
    x = x + 6;
    if(x == 360){
        x = 0;
        y = y + 6;
    };
}
function stopClock(){
    clearInterval(intervalas);
    sukinys.style.transform = 'rotate(0deg)';
    sukinys2.style.transform = 'rotate(0deg)';
}

