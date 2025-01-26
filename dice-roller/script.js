function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResults = document.getElementById("diceResults")
    const diceImages = document.getElementById("diceImages")

    const diceRolls = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="${value}.png">`);
    }
    diceResults.textContent = `Dice Rolls:${diceRolls.join(", ")}`;
    diceImages.innerHTML = images.join(' ');
}