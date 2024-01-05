// Time Stamp: 1:28:03
// https://youtu.be/SFgppU2J8To?si=HbzWg3CNmcwmrnlq

// Q.1.
{
  /* <div>
  <div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
      <button onclick="console.log('button')">Click!</button>
    </div>
  </div>
</div>; */
}

// button
// second div
// first div
// Event Bubbling

// Q.2.
// const person = { name: "Anup" };
// function sayHi(age) {
//   return `${this.name} is ${age} years old.`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// console.log(sayHi.bind(person, 21)());

// Q.3.
// function saysHi() {
//   return (() => 0)();
// }
// console.log(typeof saysHi()); // number
// The arrow function inside return statement will return 0, and the saysHi function returns the same 0, so the data type is number.

// Q.4.
// function saysHello() {
//   return () => 0;
// }
// console.log(typeof saysHello()); // function
// The arrow function inside return is not called

// Q.5.
// console.log(typeof 5); // number
// console.log(typeof typeof 5); // string

// Q.6.
// const numbers = [12, 2, 3];
// numbers[6] = 11;
// console.log(numbers); // [12, 2, 3, empty, empty, empty, 11]

// Q.7.
// const nums = [1, 2, 3];
// nums[9] = nums;
// console.log(nums);

// It will store the array at the 9th index and a loop will be formed.

// Q.8.
// Everything in Javascript is either a
// A. Primitive or Object ✔
// B. function or object
// C. only objects
// D. number or object

// Q.9.
// console.log(!!null); // false
// console.log(!!""); // false
// console.log(!!1); // true

// Q.10.
// console.warn(setInterval(() => console.log("Hi"), 1000));
// console.warn(setInterval(() => console.log("Hi"), 1000));
// console.warn(setInterval(() => console.log("Hi"), 1000));

// Q.11.
// console.log(..."Anup"); // ['A', 'n', 'u', 'p']

// Q.12.
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "One");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "Two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

// Two
// In case of Promise.race the promise that gets resolved first will be returned.

// Q.13.
// let person = {
//   name: "Peter",
// };
// const members = [person];
// person = null;
// console.log(members); // [ { name: 'Peter' } ]

// The copy of object is stored in members

// Q.14.
// const person = {
//   name: "Batman",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// name
// age

// Q.15.
// let data = 3 + 4 + "5";
// console.log(typeof data); // string

// data = 7 + '5' = '75'
// console.log(data);

// Q.16.
// console.log(typeof 3 + 4 + "5"); // number45

// typeof 3 -> number
// number is of type string so concatenation is performed

// Q.17.
// console.log(typeof (3 + 4 + +"5")); // number

// console.log(3 + 4 + +"5"); // 7 + + '5' -> 7 + 5 = 12

// Q.18.
// console.log([] == []); // false

// Two empty arrays have different references and we are comparing references

// Q.19.
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.warn(data); // [undefined, undefined, undefined]

// All elements are of type number,
// and we are returning nothing so, it will return undefined.

// Q.20.
// function getInfo(member) {
//   member.name = "Anup";
// }

// const person = { name: "Sarah" };
// getInfo(person);
// console.log(person); // { name: 'Anup' }

// We are updating the name property in the function so, it will print the new name.

// Q.21.
// function Car() {
//   this.make = "TATA";
//   return { make: "KIA" };
// }

// const myCar = new Car();
// console.log(myCar.make); // KIA

// we are returning KIA in Car()

// Q.22.
// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x); // undefined

// let is block scoped and there is no any x in global scope

// Q.23.
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof y); // number

// let x = 10;
// y = 10;

// Q.24.
// (() => {
//   let x = 10;
// })();

// (() => {
//   let x = 10;
// })();

// console.log(typeof x); // undefined

// let is not global scoped

// Q.25.
// (() => {
//   let x = (y = 10);
// })();
// (() => {
//   let x = (y = 20);
// })();

// console.log(y); // 20

// Q.26.
// let x = 100;
// (() => {
//   var x = 20;
// })();
// console.log(x); // 100

// The global x is 100

// Q.27.
// console.warn(!true - true); // -1

// Q.28.
// console.warn(true + +"10"); // 11

// true -> 1
// !true -> 0
