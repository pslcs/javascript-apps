"use strict"

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalas;
let intervalas2;
let paddedMiliseconds;
let paddedSeconds;
let paddedMinutes;
let startStop = document.querySelector('#SS')

function padMiliseconds(){
    if(miliseconds < 10){
        paddedMiliseconds = "00" + miliseconds;
    } else if (miliseconds < 100){
        paddedMiliseconds = "0" + miliseconds;
    } else {
        paddedMiliseconds = miliseconds;
    }
}

function padSeconds(){
    if(seconds < 10){
        paddedSeconds = "0" + seconds;
    } else { 
        paddedSeconds = seconds;
    }
}
function padMinutes(){
    if(minutes < 10){
        paddedMinutes = "0" + minutes;
    } else {
            paddedMinutes = minutes;
    }
}
function runTimer(){
    miliseconds = miliseconds + 10;
    padMiliseconds();
    padSeconds();
    padMinutes();
    document.querySelector('.laikas').innerText = paddedMinutes + ":" + paddedSeconds + "." + paddedMiliseconds;

    if(miliseconds == 990){
        miliseconds = -10;
        seconds++}
    
    if(seconds == 59){
        seconds = -1
    minutes++}
}
function startTimer(){
    if (intervalas == undefined){
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.querySelector('.laikas').innerText = "0" + minutes + ":" + "0" + seconds + ".00" + miliseconds;
    intervalas = setInterval( () => {runTimer()}, 10);
    } else {
        console.log('nothing interesting happens');
    }
}
function continueTimer(){
    if (intervalas == undefined){
        document.querySelector('.laikas').innerText = seconds;
        intervalas = setInterval( () => {runTimer()}, 10);
        startStop.innerText = 'Pause'
    } else {
        console.log('nothing interesting happens');
    }
}
function stopTimer(){
    clearInterval(intervalas);
    intervalas = undefined;
}
function clearTimer(){
    stopTimer();
    document.querySelector('.laikas').innerText = "00:00.000";
    intervalas = undefined;
}
function startStopTimer(){
    if (startStop.innerText == 'Start'){
        startTimer();
        startStop.innerText = 'Pause';
    } else {
        console.log('paspaudei stop');
        stopTimer();
        startStop.innerText = 'Start';
    }
}