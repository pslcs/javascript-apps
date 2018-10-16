"use strict"

let counter = 0;
let button = '<button class="clear" onclick="clean()" style="position: relative"> Restart </button>';
let notice = document.querySelector('.notice');
let tick = 0;
let tack = 0;
let tickScore = document.querySelector('.tick');
let tackScore = document.querySelector('.tack');

function placeSign(elementas){
    if (elementas.innerHTML != "<button></button>"){
        alert("This place is taken!");
    } else {
        if (counter % 2 == 1){
            elementas.innerHTML = "<img src='assets/tick.png'>";
        } else {
            elementas.innerHTML = "<img src='assets/tack.png'>";
        }
        counter++;
        checkWinner();
    }
}

let l1 = document.querySelector('#l1');
let l2 = document.querySelector('#l2');
let l3 = document.querySelector('#l3');
let l4 = document.querySelector('#l4');
let l5 = document.querySelector('#l5');
let l6 = document.querySelector('#l6');
let l7 = document.querySelector('#l7');
let l8 = document.querySelector('#l8');
let l9 = document.querySelector('#l9');

function checkWinner(){
    if( l1.innerHTML == l2.innerHTML && l2.innerHTML == l3.innerHTML && l1.innerHTML != "<button></button>"){
        Winner(l1.innerHTML);
    } else if ( l4.innerHTML == l5.innerHTML && l5.innerHTML == l6.innerHTML && l4.innerHTML != "<button></button>"){
        Winner(l4.innerHTML);
    } else if ( l7.innerHTML == l8.innerHTML && l8.innerHTML == l9.innerHTML && l7.innerHTML != "<button></button>"){
        Winner(l7.innerHTML);
    } else if ( l1.innerHTML == l4.innerHTML && l4.innerHTML == l7.innerHTML && l1.innerHTML != "<button></button>"){
        Winner(l1.innerHTML);
    } else if ( l2.innerHTML == l5.innerHTML && l5.innerHTML == l8.innerHTML && l2.innerHTML != "<button></button>"){
        Winner(l2.innerHTML);
    } else if ( l3.innerHTML == l6.innerHTML && l6.innerHTML == l9.innerHTML && l3.innerHTML != "<button></button>"){
        Winner(l3.innerHTML);
    } else if ( l1.innerHTML == l5.innerHTML && l5.innerHTML == l9.innerHTML && l1.innerHTML != "<button></button>"){
        Winner(l1.innerHTML);
    } else if ( l3.innerHTML == l5.innerHTML && l5.innerHTML == l7.innerHTML && l3.innerHTML != "<button></button>"){
        Winner(l3.innerHTML);
    } else {
        console.log("No winner");
    }
    if (l1.innerHTML != "<button></button>" && l2.innerHTML != "<button></button>" && l3.innerHTML != "<button></button>" && l4.innerHTML != "<button></button>" && l5.innerHTML != "<button></button>" && l6.innerHTML != "<button></button>" && l7.innerHTML != "<button></button>" && l8.innerHTML != "<button></button>" && l9.innerHTML != "<button></button>") {
        alert("DRAW!")
        clean();
    } 
    
}

function Winner(item){
    notice.innerHTML = item + " is the winner! <br>" + button
    notice.classList.add('active');
    if (item == '<img src="assets/tick.png">'){
        tick++;
        tickScore.innerText = tick;
    } else {
        tack++;
        tackScore.innerText = tack;
    }
}

function clean(){
    l1.innerHTML = "<button></button>";
    l2.innerHTML = "<button></button>";
    l3.innerHTML = "<button></button>";
    l4.innerHTML = "<button></button>";
    l5.innerHTML = "<button></button>";
    l6.innerHTML = "<button></button>";
    l7.innerHTML = "<button></button>";
    l8.innerHTML = "<button></button>";
    l9.innerHTML = "<button></button>";
    notice.classList.remove('active');
    notice.innerHTML = " ";
    
}