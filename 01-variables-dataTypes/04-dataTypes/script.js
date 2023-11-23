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

//these values (primitive) are stored on the stack

const imie = "tom";
const wiek = 38;

//reference values are stored on the heap

const osoba = {
  name: "tom",
  age: 40,
};

let noweImie = imie;
noweImie = "John";

let nowaOsoba = osoba;
nowaOsoba.name = "Bradley";
console.log(osoba, nowaOsoba); //both osoba and nowaOsoba will change the name to Bradley as that info is kept in the heap
