// Time Stamp: 1:05:47
// https://youtu.be/SFgppU2J8To?si=HbzWg3CNmcwmrnlq

// Q.1.
// console.warn([[[[]]]]); // [ [ [ [] ] ] ]
// Array nested inside another array.

// Q.2.
// How to find the name of OS in Javascript ?
// var operatingSystem = navigator.platform;
// console.log("Operating System: " + operatingSystem);
// ["Check the above code in browser."]

// Q.3.
// let for = 100; // We can not use reserved keywords for variable declaration
// console.log(for);

// Q.4.
// function fruit() {
//   console.log(name);
//   console.log(price);
// }
// var name = "apple";
// let price = 20;

// fruit();
// apple
// 20
// Concept  of hoisting

// Q.5.
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }
// Will print after 1 ms time interval
// Because of setTimeout, the for loop will be first executed, and once i will reach to the value of 3, the value of i is logged into console.
// 3
// 3
// 3
// var has global scope

// Q.6.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }
// 0
// 1
// 2
// let has block level scope

// Q.7.
// console.warn(+true); // 1
// console.warn(typeof +true); // number
// console.warn(true - true); // 0

// Q.8.
// console.warn(!"anil"); // false
// console.warn(typeof "anil"); // string

// Q.9.
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.warn(bird[data]); // small
// console.warn(bird["size"]); // small
// console.warn(bird.size); // small
// console.warn(bird.data); // undefined

// For variable we can use square bracket or string , but direct variable name with dot can not be used.

// Q.10.
// let c = { name: "Peter" };
// let d;
// d = c;
// c.name = "anu";
// console.log(d.name); // anu
// The name is updated.

// Q.11.
// var x;
// var x = 10;
// console.log(x); // 10

// Q.12.
// var p;
// let p = 10;
// console.log(p); // p has already been declared

// Q.13.
// let s = 23;
// let t = new Number(23);

// console.log(s == t); // true
// console.log(s === t); // false

// console.log(typeof s); // number
// console.log(typeof t); // object

// Q.14.
// let name;
// nmae = {}; // Typo
// console.log(name); // undefined
// console.log(nmae); // {}

// Q.15.
// function fruit() {
//   console.log("Jai Shree Ram");
// }

// fruit.name = "Papaya";
// fruit(); // Jai Shree Ram

// Q.16.
// function sum(a, b) {
//   return a + b;
// }
// console.warn(sum(1, "2")); // 12

// "2" is string so, the sum performs concatenation.

// Q.17.
// let number = 0;
// console.log(number++); // 0
// console.log(++number); // 2
// console.log(number); // 2

// Q.18.
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21); // object
// spread operator

// Q.19.
// function getAge() {
//   "use strict";
//   age = 24;
//   console.log(age);
// }
// getAge();

// We have used 'use strict' so we have to use var or let or const to define variables.

// Q.20.
// const sum = eval("10*10+5");
// console.warn(sum); // 105

// Q.21.
// How long is cool_secret accessible?
// sessionStorage.setItem("cool_secret", 123);
// sessionStorage and local storage are two storages, the session storage can be either manually deleted, or can be automatically deleted when browser / tab is closed.

// Q.22.
// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); // true

// Key can be string or number

// Q.23.
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj); // { a: 'repeat', b: 'two' }

// Key cannot be duplicate

// Q.24.
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// 1
// 2
// 4

// Q.25.
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar(); // Have to wait due to setTimeout
// foo();
// baz();

// First
// Third
// Second
