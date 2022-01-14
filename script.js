"use strict";
let pro__game = document.getElementById("game");
const myWin = document.querySelector(".win");
const myDraw = document.querySelector(".draw");
const myDefeat = document.querySelector(".defeat");

let hod = 0;
let win = localStorage.getItem("win");
let draw = localStorage.getItem("draws");
let defeat = localStorage.getItem("defeats");

for (let i = 0; i < 9; i++) {
  let blc = document.createElement("div");
  blc.classList.add("blocks");
  pro__game.appendChild(blc);
}
let blockElems = document.querySelectorAll(".blocks");

pro__game.addEventListener("click", checkgame);

function checkgame(e) {
  hod++;
  if (e.target.className === "blocks") {
    if (hod % 2 === 0) {
      e.target.innerHTML = "0";
    } else {
      e.target.innerHTML = "x";
    }
    if (
      (blockElems[0].innerHTML === "x" &&
        blockElems[4].innerHTML === "x" &&
        blockElems[8].innerHTML === "x") ||
      (blockElems[0].innerHTML === "x" &&
        blockElems[3].innerHTML === "x" &&
        blockElems[6].innerHTML === "x") ||
      (blockElems[0].innerHTML === "x" &&
        blockElems[4].innerHTML === "x" &&
        blockElems[8].innerHTML === "x") ||
      (blockElems[0].innerHTML === "x" &&
        blockElems[1].innerHTML === "x" &&
        blockElems[2].innerHTML === "x") ||
      (blockElems[2].innerHTML === "x" &&
        blockElems[5].innerHTML === "x" &&
        blockElems[8].innerHTML === "x") ||
      (blockElems[0].innerHTML === "x" &&
        blockElems[4].innerHTML === "x" &&
        blockElems[8].innerHTML === "x") ||
      (blockElems[1].innerHTML === "x" &&
        blockElems[4].innerHTML === "x" &&
        blockElems[7].innerHTML === "x")
    ) {
      alert("Крестики победили !");
      win++;
      localStorage.setItem("win", win);
      window.location.reload();
    }
    if (
      (blockElems[0].innerHTML === "0" &&
        blockElems[4].innerHTML === "0" &&
        blockElems[8].innerHTML === "0") ||
      (blockElems[0].innerHTML === "0" &&
        blockElems[3].innerHTML === "0" &&
        blockElems[6].innerHTML === "0") ||
      (blockElems[0].innerHTML === "0" &&
        blockElems[4].innerHTML === "0" &&
        blockElems[8].innerHTML === "0") ||
      (blockElems[0].innerHTML === "0" &&
        blockElems[1].innerHTML === "0" &&
        blockElems[2].innerHTML === "0") ||
      (blockElems[2].innerHTML === "0" &&
        blockElems[5].innerHTML === "0" &&
        blockElems[8].innerHTML === "0") ||
      (blockElems[0].innerHTML === "0" &&
        blockElems[4].innerHTML === "0" &&
        blockElems[8].innerHTML === "0") ||
      (blockElems[1].innerHTML === "0" &&
        blockElems[4].innerHTML === "0" &&
        blockElems[7].innerHTML === "0")
    ) {
      alert("Нолики выиграли!");
      defeat++;
      localStorage.setItem("defeats", defeat);
      window.location.reload();
    }
    if (blockElems.textContent === "0" || blockElems.textContent === "x") {
      alert("Ничья!");
      draw++;
      localStorage.setItem("draws", draw);
      window.location.reload();
    }
  }
  console.log(win, draw, defeat);
}

myWin.textContent = "Крестики :" + " " + localStorage.getItem("win");
myDefeat.textContent = "Нолики :" + " " + localStorage.getItem("defeats");
myDraw.textContent = "Ничьи :" + " " + localStorage.getItem("draws");
