"use strict"

let inputC = document.querySelector(".nesifruotas");
let inputD = document.querySelector(".sifruotas");
let outputC = document.querySelector(".ciphered");
let outputD = document.querySelector(".deciphered");
let mygtukoVieta1 = document.querySelector("#mygtuko-vieta1");
let mygtukoVieta2 = document.querySelector("#mygtuko-vieta2");
let bandymas = '';
let raidesKodas;
let counter = 1;
new ClipboardJS('.btn');

function asciiEncrypt(plaintext) {
let stringas = plaintext;
  for (let i = 0; i<plaintext.length; i++) {
    counter = i+5 % 7;
    raidesKodas = (plaintext.charCodeAt(i) + counter)
    let raide = String.fromCharCode(raidesKodas);
    stringas = stringas.slice(0, i) + raide + stringas.slice(i+1);
    counter += 1
  }
  return stringas
};

function showCiphered() {
  outputC.innerText = asciiEncrypt(inputC.value);
  bandymas = outputC.innerText
  mygtukoVieta2.innerHTML = '<button class="btn" id="copyButton2" data-clipboard-text="' + bandymas + '">Copy</button>'
}
    
function asciiDecrypt(ciphertext) {
let stringas = ciphertext;
  for (let i = 0; i<ciphertext.length; i++) {
    counter = i+5 % 7;
    raidesKodas = (ciphertext.charCodeAt(i) - counter);
    let raide = String.fromCharCode(raidesKodas);
    stringas = stringas.slice(0, i) + raide + stringas.slice(i+1);
    counter += 1
  }
  return stringas
};

function showDeciphered() {
  outputD.innerText = asciiDecrypt(inputD.value);
  bandymas = outputD.innerText
  mygtukoVieta1.innerHTML = '<button class="btn" id="copyButton1" data-clipboard-text="' + bandymas + '">Copy</button>'
}

function copyText() {
  bandymas.select();
  document.execCommand("copy");
}
