//Primitive values
//string
const firstName = "sara";
//number
const age = 30;
//boolean
const hasKids = true;
//null (type of - object which is a mistake)
const aptNumber = null;
//undefined
let score;
//symbol
const id = Symbol("id");
//BigInt
const n = 888844844747477373773383394994948n;

const output = n;

console.log(output, typeof output);

//Reference Types

//arrays, objects, functins etc
//arr
const numbers = [1, 2, 3, 4];

//objects
const person = {
  name: "Brad",
};

//function
function sayHello() {
  console.log("hello");
}
const output1 = sayHello;
console.log(output1, typeof output1);
