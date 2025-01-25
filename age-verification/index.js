const result = document.getElementById("result");
const mySubmit = document.getElementById("mySubmit");
const myAge = document.getElementById("yourAge");
mySubmit.onclick = function () {
    let age = myAge.value;
    if (age == 0) {
        result.textContent = "You are just born";
    }
    else if (age > 100) {
        result.textContent = "You are too old";
    }
    else if (age < 18){
        result.textContent = "You are a minor";
    }
    else if (age >18){
        result.textContent = "You can enter the site";
    }
    else{
        result.textContent = "Enter something valid";
    }
}