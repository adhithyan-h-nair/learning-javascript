const roll = document.getElementById("rollBtn");
const num = document.getElementById("myNumber");

let min = 1;
let max = 6;
let rollNum;
roll.onclick = function () {
    rollNum = Math.floor(Math.random() * max) + min;
    num.textContent = rollNum;
}