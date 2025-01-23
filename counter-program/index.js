const inc = document.getElementById("incBtn");
const rst = document.getElementById("rstBtn");
const dec = document.getElementById("decBtn");
const num = document.getElementById("countNum");

let count = 0;
num.textContent=count;

inc.onclick = function(){
    count++;
    num.textContent = count;
};

rst.onclick = function(){
    count=0;
    num.textContent = count;
};

dec.onclick = function(){
    count--;
    num.textContent = count;
};