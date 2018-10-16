"use strict"

let burger = document.querySelector(".burger");
let previousHeight = 340;
let artis = 2;
let level = 1
let uzsakymai = document.querySelector(".uzsakymai");
let food = "";
let queue = 0;
let pendingRecipes = [];
let thisManyDeleted = 1;
let time = document.querySelector("#time");
let levelTime = level * 40;
let minutes = 0;
let seconds = 0;
let runing;
let orders;

document.addEventListener("keypress", function(event) {
    if (event.which == 32) {
        checkBurger();
    }
})
startGame();

function startGame() {
    runing = setInterval(() => {runTime()}, 1000);
    orders = setInterval(() => {requestRecipe()}, 1000);
}
function addToBurger(maistas, height) {
    previousHeight -= height;
    burger.innerHTML = "<div class='" + maistas + "' style='top: " + previousHeight + "px; z-index: " + artis + "'></div>" + burger.innerHTML
    artis += 1;
}
function requestRecipe() {
    if (queue < level * 2) {
        queue += 1;
        let recipe = generateRecipe();
        postRecipe(recipe);
    } else {
        clearInterval(orders);
    }


}
function generateRecipe() {
    let receptas = [];
    receptas.push("Bottom")
    for (let i = 1; i < level + 3;) {
        let temp = (Math.floor((Math.random() * 4) + 1));
        if (temp == 1){food = "Meat"}
        else if (temp == 2){food = "Cheese"}
        else if (temp == 3){food = "Tomatoes"}
        else if (temp == 4){food = "Cucumbers"}
        if (receptas[i-1] != food) {
            receptas.push(food);
            i += 1;
        }
    }
    receptas.push("Top");
    return receptas;
}
function postRecipe(recipe) {
    let sarasas = "";
    recipe.forEach(function(aitemas) {
    sarasas = sarasas + '<li>' + aitemas + '</li>'
    });
    let recipeSheet = '<div class="uzsakymoLapelis" onclick="checkRandomBurger(this)"><h4 class="uzsakymoPavadinimas">Order #' + queue + '</h4><ul>' + sarasas + '</ul></div>'    
    uzsakymai.innerHTML = uzsakymai.innerHTML + recipeSheet
    pendingRecipes.push(recipe);
}
// function serveBurger() {
//     let queue2 = thisManyDeleted;
//     burger.innerHTML = "";
//     previousHeight = 340;
//     uzsakymai.innerHTML = "";
//     pendingRecipes.shift();
//     let naujasMasyvas = [];
//     let naujasMasyvoElementas = [];
//     for (let i = 0; i < pendingRecipes.length; i++) {
//         let sarasas = "";
//         for (let t = 0; t < pendingRecipes[0].length; t++) {
//             naujasMasyvoElementas.push(pendingRecipes[i][t]);
//             sarasas = sarasas + '<li>' + pendingRecipes[i][t] + '</li>'
//         }
//         naujasMasyvas.push(naujasMasyvoElementas);        
//         let recipeSheet = '<div class="uzsakymoLapelis" onclick="checkRandomBurger(this)"><h4 class="uzsakymoPavadinimas">Order #' + queue2 + '</h4><ul>' + sarasas + '</ul></div>'
//         queue2 += 1;
//         uzsakymai.innerHTML = uzsakymai.innerHTML + recipeSheet
//     }
// }
function checkRandomBurger(gautas) {
    let randomBurger = [];
    let nowBurger = [];
    for (let i = 0; i < burger.childNodes.length; i++) {
        nowBurger.unshift(burger.childNodes[i].classList[3]);
    }
    let recipeRecipe = gautas.querySelectorAll("li");
    for (let i = 0; i < recipeRecipe.length; i++) {
        randomBurger.push(recipeRecipe[i].innerText)
    }
    if (compareToRecipe(nowBurger, randomBurger)) {
        gautas.parentNode.removeChild(gautas)
        pendingRecipes.shift();
        trashBurger();
    }
}
function checkBurger() {
    console.log("start of ceckBurger");
    let currentBurger = [];
    for (let i = 0; i < burger.childNodes.length; i++) {
        currentBurger.unshift(burger.childNodes[i].classList[3]);
    }
    console.log(currentBurger + " - current")
    console.log(pendingRecipes + " - pending")
    if (compareToRecipe(currentBurger, pendingRecipes[0])) {
        uzsakymai.childNodes[1].parentNode.removeChild(uzsakymai.childNodes[1])
        pendingRecipes.shift();
        trashBurger();
        
        if (pendingRecipes.length == 0) {
            levelUp();
            clearInterval(runing);
            queue = 0;
        }
    }
    console.log("end of ceckBurger");
}
function trashBurger() {
    burger.innerHTML = ""
    previousHeight = 340;
}
function compareToRecipe(curr, reci) {
    for (let i = 0; i < reci.length; i++) {
        if (curr[i] != reci[i] || curr.length != reci.length) {
            return false;
        }
    }
    thisManyDeleted += 1;
    return true;
}
function levelUp() {
    level += 1;
    if (confirm("Level up! Start new level?")) {
        levelTime = level * 40;
        orders = setInterval(() => {requestRecipe()}, 1000);
        runing = setInterval(() => {runTime()}, 1000);

    } else {
        gameOver();
    }
}
function gameOver() {
    clearInterval(orders);
    clearInterval(runing);  
    alert("GAME OVER!");
    uzsakymai.innerHTML = "";
    burger.innerHTML = "";
}
function runTime(){
    minutes = Math.floor(levelTime / 60);
    seconds = levelTime % 60;
    if (seconds < 10) {seconds = "0" + seconds;}
    let timeLeft = minutes + " : " + seconds;
    time.innerText = timeLeft;
    if (levelTime == 0) {
        gameOver();
    } else {
        levelTime -= 1;
    }
}