const mySubmit = document.getElementById("mySubmit");
const myNumber = document.getElementById("myNumber");
const result = document.getElementById("result");
let maxNum = 100;
let minNum = 1;
let attempts = 0;
let number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;;
console.log(number)
mySubmit.onclick = function () {
    let inNumber = myNumber.value;
    attempts++;
    if (inNumber < minNum || inNumber > maxNum) {
        result.textContent = `Enter a number between ${minNum}-${maxNum}.`;
    } else if (inNumber < number) {
        result.textContent = `Too Low! Guess again.`;
    } else if (inNumber > number) {
        result.textContent = `Too High! Guess again.`;
    } else {
        result.textContent = `You Won! It took ${attempts} attempts.`;
        mySubmit.disabled = true;
    }
}