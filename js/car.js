"use strict"

let lwheel = document.querySelector("#left");
let rwheel = document.querySelector("#right");
let car = document.querySelector(".car");
let intervalas;
let intervalas2;
let rotation;
let deg = 0;
let coordinates = 0;

function initBack() {
    clearInterval(intervalas);
    clearInterval(intervalas2);
    intervalas = setInterval( () => {back()}, 50);
    intervalas2 = setInterval( () => {moveCarBackward()}, 30);
}

function initForward() {
    clearInterval(intervalas);
    clearInterval(intervalas2);
    intervalas = setInterval( () => {forward()}, 5)
    intervalas2 = setInterval( () => {moveCarForward()}, 3);
}

function back() {
    rotation = "rotate(" + deg + "deg)";
    lwheel.style.transform = rotation;
    rwheel.style.transform = rotation;
    deg = deg - 6;
}

function stop() {
    clearInterval(intervalas);
    clearInterval(intervalas2);
}

function forward() {
    rotation = "rotate(" + deg + "deg)";
    lwheel.style.transform = rotation;
    rwheel.style.transform = rotation;
    deg = deg + 6;
}

function moveCarForward() {
    let position = "translateX(" + coordinates + "px)"
    car.style.transform = position;
    coordinates = coordinates + 1;
    if (car.offsetLeft == coordinates) {
        stop();
    }
}

function moveCarBackward() {
    let position = "translateX(" + coordinates + "px)"
    car.style.transform = position;
    coordinates = coordinates - 1;
    if (car.offsetLeft == -coordinates) {
        stop();
    }
}