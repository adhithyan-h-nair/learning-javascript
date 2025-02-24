// console.log(`Hello World`);

// window.alert(`Hello, Welcome to My site`);

// document.getElementById("myH1").textContent = `Hello Welcome to My Website`;
// document.getElementById("myP1").textContent = `Hi👋,This is my website.Hope you like it 🥰`;

// let age = 22;
// let price = 10.99;
// let firstName = "Adhithyan";
// let isStudent = true;
// console.log(`Hello ${firstName},`, typeof firstName);
// console.log(`You are ${age} years old,`,typeof age);
// console.log(`Your fees is $${price},`,typeof price);
// console.log(`You are a student : ${isStudent},`,typeof isStudent);

// let fullName = "Adhithyan H Nair";
// let age = 22;
// let isOnline = true;
// document.getElementById("p1").textContent = `Hello👋 ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old 🙎‍♂️`;
// document.getElementById("p3").textContent = `${fullName} is online🛜 : ${isOnline}`;

// let a = 10;
// let b = 5;
// let c = a + b;
// console.log(c);
// c = a - b;
// console.log(c);
// c = a * b;
// console.log(c);
// c = a / b;
// console.log(c);
// c = a ** b;
// console.log(c);
// c = a % b;
// console.log(c);
// c += 1;
// console.log(c);
// c *= 1;
// console.log(c);

// let userName;
// userName = window.prompt("What's your name?");
// console.log(userName, typeof userName);

// let userName;
// document.getElementById("mySubmit").onclick = function(){
//     userName = document.getElementById("myName").value;
//     console.log(userName);
//     document.getElementById("disName").textContent = `Welcome ${userName}`;
// }

/** Type Conversion : Change the datatype of a value to another
 *      Number()
 *      String()
 *      Boolean()
 *  Const:
 *      a variable that cant be changed
 */

//Math functions

// console.log(Math.PI) //gives pi value
// console.log(Math.E) //gives Euler number value

// let num = 23.567823
// let roundNum = Math.round(num);
// console.log(roundNum);

// let num = 23.567823
// let floorNum = Math.floor(num); //rounds down the number
// console.log(floorNum);

// let num = 23.567823
// let ceilNum = Math.ceil(num); //rounds up the number
// console.log(ceilNum);

// let num = 23.567823
// let truncNum = Math.trunc(num);//eliminate the decimal part
// console.log(truncNum);

// let pow = 10;
// let num = 5;
// let numPower = Math.pow(num,pow);
// console.log(numPower);

//IF Statements
// function greetings(time){
//     if(time > 1200){
//         console.log("good afternoon!")
//     }
//     else{
//         console.log("good morning!")
//     }
// }
// greetings(1300);
// greetings(0800);

/**
 * .checked :
 *      a property that determines the checked state of an HTML checkBox or radio button element
 */

/**
 * ternary operator:
 *      a shortcut for if else statements
 */

// function greetings2(time){
//     return time > 1200 ? "good afternoon" : "good morning";
// }   
// console.log(greetings2(1300));
// console.log(greetings2(0300));

// let value = 1;
// switch (value) {
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Day doesnt exist");
//         break;
// }

//String Methods
// let userName = "       Adhithyan H Nair    "
// console.log(userName.length);
// console.log(userName.charAt(12))
// console.log(userName.indexOf("i"));
// userName = userName.trim();
// console.log(userName);

//String Slicing
// let str = "Selena Gomez"
// let firstName = str.slice(0, str.indexOf(" "));
// let lastName = str.slice((str.indexOf(" ") + 1));
// console.log(`FirstName : ${firstName}`);
// console.log(`LastName : ${lastName}`);

//method chaining
// let userName = window.prompt("Enter your username: ");
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

//Logical Operator
// let temp = 20;
// console.log(typeof temp)
// if (temp < 32 && temp > 22) {
//     console.log("The weather is okay");
// }
// else if (temp < 22 || temp > 32) {
//     console.log("The weather is not okay!");
// }
// else {
//     console.log("Enter a number")
// }

//while loop
// let n = 5;
// let i = 1;
// let sum = 0;
// // while (i <= n) {
// //     sum += i;
// //     i++;
// // }
// // console.log(sum);
// do {
//     sum += i;
//     i++
// } while (i <= n);
// console.log(sum)

// for loop
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

//array
// let fruits = ["apple", "banana", "kiwi", "pineapple"]
// console.log(fruits);
// fruits[0] = "coconut";
// console.log(fruits);
// fruits.push("apple");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.unshift("apple");
// console.log(fruits);
// console.log(fruits.length);

// for(let fruit of fruits){
//     console.log(fruit);
// }