const tempValue = document.getElementById("tempValue");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function () {
    let temp = tempValue.value;
    if (temp === '') {
        result.textContent = `Enter a value`
    }
    else {
        if (toFahrenheit.checked) {
            temp = (9 / 5) * temp + 32;
            result.textContent = `${temp} °F`
        }
        else if (toCelsius.checked) {
            temp = (temp - 32) * (5 / 9);
            result.textContent = `${temp} °C`
        }
        else {
            result.textContent = `Select an option.`
        }
    }
}