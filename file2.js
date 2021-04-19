"use strict";
exports.__esModule = true;
var createInterface = require("readline").createInterface;
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter variable: ", function (input) {
    console.log("Variable: " + input);
    rl.close();
});
// var no: number;
// no = 35;
// console.log(no);
// var str:string = "Hello";
// console.log(str);
// var flag:boolean=true;
// console.log(flag);
// flag=false;
// console.log(flag);
// str.concat(" World");
// console.log(str);
// console.log(no+str);
// var cars = {
//                 make: "Kia",
//                 model: "Seltos",
//                 year: 2021
//             };
// console.log(cars);
// if(cars["make"] === "Kia")
//     console.log("Yes");
