//Variables
let x = 5; //Number
let y = "Hello"; //String
let z = true; //Boolean
5+2+3+4; //Javascript is a calculator
x + y = "5Hello"; //+ also does concatination
"" + anything; //Stringification
//Operators
2 + 2 = 4;
2 - 2 = 0;
2 * 2 = 4;
2 / 2 = 1;
2**2 = 4; //Exponents
2 % 2 = 0;
//Other cool operators found in Math
Math.floor(3.2) //3
Math.ceil(3.2) //4
Math.max(3, 4, 5) //5
Math.min(3, 4, 5) //3
//There are more, but you don't need to worry about them (for now!)
let arr = [1, 2, 3] //Arrays are like in python, start counting at zero.
arr[0] //1
arr[2] //3
arr[4] //undefined!
//Null, NaN, Infinity, Undefined;
let x; //x is undefined
let x = null; //null is sorta like undefined, but slightly different.
let x = 2 * "erer"; //NaN, when a mathmatical operation fails completely.
let x = 10**10**100 //A googleplex is to big for JS, becomes Infinity
//More on arrays.
arr.length //returns 3
Math.random() //Oooh - Random Number
arr[Math.floor(Math.random()*arr.length)] //Random number from array
//Objects - Like python dictionaries
let obj = {
  key: "value" //key can be a word, value can be anything
  "string key": "value" //key can be a string or number, nothing else. Value can be anything.
  "arr": [1, 2, 3] //Arrays in objects
  "obj": {
    prop: 1
  }
}
//Access properties
obj.key;
obj.arr;
obj.obj.prop;
obj["string key"];
//If statements
if("boolish value"){
   //Do stuff...
}
//While loops
let i = 0;
while(i < 10){
  console.log(i)
}
//Array iteration with forEach
let array = [1, 2, 3]
array.forEach(item => {
  console.log(item)
});
//Object iteration with Object.keys and forEach
let obj = {name: "Nate"};
Object.keys(obj).forEach(key => {
  console.log(obj[key])
});
//Functions
function sayHello(){
  console.log("HELLO");
}
sayHello() //Invoke
function saySomething(thing){
  console.log(thing);
}
//Return values
function add(a, b){
  return a + b;
}
//And that's basic javascript!
/*
Challenges:
RandInt Function
Random Sentence Generator
*/

