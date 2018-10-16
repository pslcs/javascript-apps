"use strict"

function addToResult(manoKintamasis){
    if(manoKintamasis == 0 || manoKintamasis == 1 || manoKintamasis == 2 || manoKintamasis == 3 || manoKintamasis == 4 || manoKintamasis == 5 || manoKintamasis == 6 || manoKintamasis == 7 || manoKintamasis == 8 || manoKintamasis == 9 || manoKintamasis == 0 || manoKintamasis == '+' || manoKintamasis == '-' || manoKintamasis == '*' || manoKintamasis == '/' || manoKintamasis == '.'){
    document.querySelector('.result').value += manoKintamasis;
    console.log(typeof(document.querySelector('.result').value));
    } else {alert("Įvedei kažką negalimo")}
}

function getResult(){
    let salyga = document.querySelector('.result').value;
    let atsakymas = eval(salyga);
    if(atsakymas == undefined){
    atsakymas = "Neįvedei skaičiaus!";}
    document.querySelector('.result').value = atsakymas;
}

function clearLastSymbol(){
    let ilgis = document.querySelector('.result').value;
    let naujasIlgis = ilgis.slice(0, ilgis.length - 1);
    document.querySelector('.result').value = naujasIlgis;
}

function savoFunkcija(event){
    if(event.key == "Enter"){
        getResult();
    }
}

function clearAll(){
    let ilgis = document.querySelector('.result').value;
    let naujasIlgis = ilgis.slice(0, 0);
    document.querySelector('.result').value = naujasIlgis;
}