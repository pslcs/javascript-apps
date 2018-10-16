"use strict"

let worm = document.querySelectorAll(".worm");
let score = document.querySelector(".score");
let levelIndicator = document.querySelector(".level");
let startas = document.querySelector(".startButton");
let restartas = document.querySelector(".restartButton");
let ranks = document.querySelector(".ranks");
let lastScore = document.querySelector(".lastScore");
let highScoreText = document.querySelector(".highScore");
let highScore;
let height;
let currentHeight;
let darVienasKintamasis;
let points = 0;
let speed = 3600000;
let level = 1;
let game = 0;

highScore = localStorage.getItem("points");

restartas.style.display = "none";
ranks.style.visibility = "hidden";

var intervalas = setInterval ( () => {grow()}, speed);

function startGame() {
    startas.style.display = "none";
    restartas.style.display = "block";
    levelIndicator.innerText = "level: 1";
    game = 1;
    showButtons();
    speed = 1000;
    clearInterval(intervalas);
    intervalas = setInterval ( () => {grow()}, speed);
}

function showButtons() {
    let menu = document.querySelector(".menu")
    if (game == 1) {
        menu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "visible";
    }
}

function restartGame() {
    for (let i = 0; i < 3; i++){
        worm[i].style.height = "150px";
    }
    game = 1;
    showButtons();
    ranks.style.visibility = "hidden";
    points = 0;
    level = 1;
    levelIndicator.innerText = "level: 1";
    score.innerText = points;
    speed = 1000;
    clearInterval(intervalas);
    intervalas = setInterval ( () => {grow()}, speed);

}

function grow() {
    for (let i = 0; i < 3; i++){
        currentHeight = worm[i].offsetHeight;
        height = currentHeight + 10;
        darVienasKintamasis = height + "px";
        worm[i].style.height = darVienasKintamasis;
        checkHeight(height);
    }
}

function checkHeight() {
    if(height > 500){
        gameOver();
    }
}

function gameOver() {
    game = 0;
    showButtons();
    clearInterval(intervalas);
    ranks.style.visibility = "visible";
    lastScore.innerText = points;
    if (points > highScore) {
        localStorage.setItem("points", points);
        highScore = localStorage.getItem("points");
    }
    highScoreText.innerHTML = highScore;
    
}

function smash(sitas) {
    if (game == 1){
        sitas.style.height = "150px"
        points++;
        score.innerText = points;
        if (points % 10 == 0){
            level++
            speed = 500 / level;
            levelup();
        }
    }
}

function levelup() {
    clearInterval(intervalas);
    intervalas = setInterval ( () => {grow()}, speed);
    console.log("levelup. Speed - " + speed + ". Level - " + level)
    levelIndicator.innerText = "level: " + level;
}





// /* Pirmiausia, pačiupkime visus 3 žaidimo personažus/veikėjus  */
// let minions = document.querySelectorAll(".minion");
// /* Antra, nustatykime žaidėjo rezultatą, kaip 0  */
// let result = 0;
// /* Trečia, nustatykime žaidimo lygį 1, nuo pat pradžių */
// let level = 1;

// /* Susikurkime funkciją, kuri bus atsakinga už žaidimo paleidimą paspaudus mygtuką "start" */
// function startGame() {
		
// 		/* Paslepkime mums nereikalingus elementus  */
//     document.getElementById("startBlock").style.display = "none";
//     document.getElementById("gameHover").style.display = "none";
// 		/* Pradėkime rodyti žaidėjo taškus  */
//     document.getElementById("currentScore").style.display = 	"block";
//     document.getElementById("currentScore").innerText = 0;
// 		/* ir iškviečiame funkciją, kuri inicijuos žaidimą.  */
//     init();
//  }

// function init() {
//     level = 1;
//     result = 0;
//     /* kviečiame funkciją, kuri augins mūsų žaidimo veikėjus.  */
//     growMinion();
// }


// function growMinion() {
//     var myTimer = setTimeout(function() {
//        	/* ciklas, kuris paims kekvieną mūsų žaidimo personažą.  */
//         for(let i = 0; i < minions.length; i++){
//                 	/* tikriname, ar žaidimo personažas ne kirto mirties linijos  */
//         	if(minions[i].offsetHeight > 500){
//             gameOver();
//             return false;
//           }
//           /* auginame personažą po 10px, kas kart. */
//           minions[i].style.height = minions[i].offsetHeight + 10 + "px";
//         }
        
//         /* iškviečiame šią funkciją ratu. */
//         growMinion();
//     }, 400 / level); /* dalindami lygį iš milisekundžių, sunkinsime žaidimą žaidėjui, .  */
// }


// /* Sukurkime funkciją, jeigu žaidėjas pralaimi, joje nurodykime, kad iššauktų lentelę "Game Over". */
// function gameOver() {
//     for(let i = 0; i < minions.length; i++){
//       minions[i].style.height = "100px";
//     }
//     document.getElementById("gameHover").style.display = "block";
//     document.getElementById("gameoverBlock").style.display = "block";
//     document.getElementById("result").innerText = result;
//     result = 0;
// }
// /* Funkcija, kuri didins žaidimo lygį, bei atvaizduos vartotojo lange. */
// function levelUp() {
//     level++;
//     document.getElementById("levelUp").style.display = "block";
//     document.getElementById("levelUp").innerText = "Level up: " + level;
    
//     setTimeout(function() {
//         document.getElementById("levelUp").style.display = "none";
//     }, 500);
// }
// /* Pagrindinė žaidimo funkcija, kuri neleis mūsų veikėjui pasiekti mirties linijos, kai ant jo paspaudžiame. */
// function smashMinion(minion) {
//     minion.style.height = 100 + "px";
//     result += 1;
//     if(result % 10 === 0) {
//       levelUp();
//     }   
//     document.getElementById("currentScore").innerHTML = result;
// }

// /* Kaip ir kiekvienas "kietas žaidimas" turi galimybę žaisti išnaujo, būtent ši funkciją mums leis, tai padaryti. */
// function restartGame() {
//     document.getElementById("gameHover").style.display = "none";
//     document.getElementById("gameoverBlock").style.display = "none";
//     document.getElementById("currentScore").innerHTML = 0;
//     result = 0;
//     init();
// }