const subScribe = document.getElementById("subScribe");
const payPal = document.getElementById("payPal");
const masterCard = document.getElementById("masterCard");
const visaCard = document.getElementById("visaCard");
const resultSub = document.getElementById("resultSub");
const resultPay = document.getElementById("resultPay");

const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    if (subScribe.checked) {
        resultSub.textContent = "You are subscribed";
    }
    else {
        resultSub.textContent = "You are not subscribed";
    }
    if (payPal.checked) {
        resultPay.textContent = "You choose PayPal as payment method"
    }
    else if (masterCard.checked) {
        resultPay.textContent = "You choose MasterCard as payment method"
    }
    else if (visaCard.checked) {
        resultPay.textContent = "You choose VisaCard as payment method"
    }
    else {
        resultPay.textContent = "You did not choose any payment method"
    }
}