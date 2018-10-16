"use strict"

let input = document.querySelector(".input");
let bottom = document.querySelector(".bottom");
let newList;
let items = document.querySelectorAll(".item");
let i;
let bottomer = document.querySelector(".bottomer");
let doneList;
let temporaryItem;

bottom.innerHTML = localStorage.getItem('undoneList');


function addItem() {
    i = items.length;
    newList = bottom.innerHTML + '<div class="item" id="a' + i + '"><i class="far fa-check-circle done" onclick="addItemDone(this.parentNode)"></i><i class="far fa-trash-alt trash" onclick="remove(this.parentNode)"></i>' + input.value + '</div>'
    bottom.innerHTML = newList
    localStorage.setItem('undoneList', newList);
    input.value = "";
    items = document.querySelectorAll(".item");
}

function addItemDone(kascia) {
    i = items.length;
    bottomer.innerHTML = bottomer.innerHTML + '<div class="itemas" id="a' + i + '"><i class="far fa-check-circle done" onclick="addItemUndone(this.parentNode)"></i><i class="far fa-trash-alt trash" onclick="remove(this.parentNode)"></i>' + kascia.innerText + '</div>'
    localStorage.setItem('doneList', doneList);
    items = document.querySelectorAll(".item");
    kascia.remove();
}

function addItemUndone(kascia) {
    i = items.length;
    bottom.innerHTML = bottom.innerHTML + '<div class="item" id="a' + i + '"><i class="far fa-check-circle done" onclick="addItemDone(this.parentNode)"></i><i class="far fa-trash-alt trash" onclick="remove(this.parentNode)"></i>' + kascia.innerText + '</div>'
    localStorage.setItem('undoneList', newList);
    input.value = "";
    items = document.querySelectorAll(".item");
    kascia.remove();
}

function remove(sudas) {
    sudas.remove();
    updateStorage();
}

function updateStorage() {
    newList = bottom.innerHTML;
    localStorage.clear();
    localStorage.setItem('undoneList', newList);
}

function addItemKey() {
    if (event.keyCode == 13) {
        addItem();
    }
}

function done(sudas) {
    if (sudas.parentNode.classList.value == "bottom") {
        undoneToDone(sudas);
    } else {
        doneToUndone(sudas);
    }
}

function nodeToString ( node ) {
    var tmpNode = document.createElement( "div" );
    tmpNode.appendChild( node.cloneNode( true ) );
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
 }

function undoneToDone(sudas) {
    
    localStorage.setItem('doneList', bottomer.innerHTML);
    // sudas.remove();
    let index = sudas.slice(14, 15)
    console.log(index);

    // var escapedStr = nodeToString( sudas ).replace( "<" , "&lt;" ).replace( ">" , "&gt;");
    // bottomer.innerHTML += escapedStr;
}

function doneToUndone(itemas) {
    newList = bottom.innerHTML + itemas.parentNode.innerHTML;
    bottom.innerHTML = newList;
    updateStorage();
    itemas.remove();
}


