// .A set of 100 questions along with answers

// --:: Output Based Questions ::--
// Q.1.

// let a = [];
// let b = [];
// console.warn(a == b); // false
// console.warn(a === b); // false

// The both will give false as output, because when we compare whole array in that case the address of the array is compared.

// let c = [2, 3, 4, 5];
// let d = [2, 3, 4, 5];
// console.log(c == d); // false
// console.log(c[2] == d[2]); // true
// console.log(c === d); // false
// console.log(c[2] === d[2]); // true

// Q.2.
// let e = [];
// let f = e;
// console.warn(e == f); // true
// console.warn(e === f); // true

// In this case we have copied the array e in f, so the address remains same.

// Q.3.
// let g = [20];
// let h = [20];
// console.warn(g[0] == h[0]); // true
// console.warn(g[0] === h[0]); // true

// The values stored at 0th index is compared, so the output is true

// Q.4.
// let z = [1, 2, 3, 4];
// let y = { name: "Sneha" };
// console.warn(...z); // 1 2 3 4

// The ... operator will destructure the array

// Q.5.
// console.warn(typeof NaN); // number

// The typeof will give the data type, NaN (Not a Number) is a special number, which indicates that the output is not a number. Suppose, we divide a string by a number, in that case we will get NaN as output.

// let s = "Simran";
// let r = true;
// console.log(s / 2); // NaN
// console.log(s / r); // NaN

// Q.6.
// let data = 10 - -10;
// console.warn(data); // 20

// The - and - becomes + as per maths.

// Q.7.
// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set); // {1, 2, 3, 4}

// Set will remove the duplicate values.

// Q.8.
// let data = { name: "Shruti" };
// console.warn(delete data.name); // true

// The name is deleted from the data object, so the output will be true.
// If we check the value of name after deletion it will be undefined.
// console.warn(data.name); // undefined

// Q.9.
// const student = { name: "Anu" };
// console.warn(delete student); // false

// We can't delete the object directly, we can delete properties.
// console.log(student); // The object student is still there.

// Q.10.
// const names = ["Alison", "Luna", "Ava"];
// const [y] = names;
// console.log(y); // Alison

// The first element is copied.
// console.log(names); // ["Alison", "Luna", "Ava"]
// const [m, n] = names;
// console.log(m, n); // Alison Luna

// 😎  ----::Write code for the given question::----   😎

// Q.11.
// const names1 = ["Dino", "Chris", "Leonardo"];
// How to get second element without first element ?

// const [, s] = names1;
// console.log(s); // Chris

// Q.12.
// const emp = { name: "Raju", age: 29, skill: "JS" };
// How to get name property without (.) operator ?
// const { name } = emp;
// console.log(name);
// We can access properties of an object by their name with the help of a new variable written inside curly braces.

// Q.13.
// let data1 = { name: "Anita", age: 27, skill: "JS" };
// let info = { city: "Noida", mail: "anita_00@gmail.com" };
// // Merge two objects
// data1 = { ...data1, ...info };
// console.log(data1);

// Q.14.
// let data = { name: "Sumi", age: 23, skill: "OS" };
// let info = { city: "Patna" };
// data = { data, ...info };
// console.warn(data); // { data: { name: 'Sumi', age: 23, skill: 'OS' }, city: 'Patna' }

// Since data is not destructured, it will become an internal object.

// Q.15.
// let data = { name: "Smith", age: 22, skill: "Python" };
// let info = { city: "Delhi", skill: "Tableau" };
// data = { ...data, ...info };
// console.log(data); // {name: 'Smith', age: 22, skill: 'Tableau', city: 'Delhi'}

// Q.16.
// const name = "Shri";
// console.log(name()); // It will throw an error, name is not a function.

// Q.17.
// const result = false || {} || null;
// console.warn(result); // {}

// The OR operator looks for first positive value, in this case the object is the first positive value.

// const val = false || 2 || null;
// console.log(val); // 2
// const val1 = false || -23 || null;
// console.log(val1); // -23
// const val2 = false || 0 || null;
// console.log(val2); // null
// const val3 = false || {} || 20 || null;
// console.log(val3); // {}

// Q.18.
// const res = null || false || "";
// console.warn(res); // empty string
// In case there is no any positive value, the output will be the last value.
// const res1 = null || "" || false;
// console.warn(res1); // false

// // Q.19.
// const result = [] || 0 || true;
// console.warn(result); // []

// // First positive value is []
// const result1 = true || 0 || [];
// console.log(result1); // true
// const result2 = 0 || [] || true;
// console.log(result2); // []

// Q.20.
// console.warn(Promise.resolve(5)); // Promise {<fulfilled>: 5}

// When promise is resolved it returns fulfilled.

// Q.21.
// console.warn("❤" === "❤"); // true

// Checks the unicode of the emoji.

// 😎Theoretical Question😎

// Q.22.
// JSON.parse();
//What this method will do?
// (a). Parses JSON to a Javascript value ✔
// (b). Parses a Javascript object to JSON
// (c). Parses any Javascript value to JSON
// (d). Parses JSON to a Javascript object only

// Q.23.
// let name = "Bindu";
// function getName() {
//   console.log(name);
//   let name = "Anil";
// }
// getName(); // Error

// Since we have used let for declaration, it will give an error.
// Cannot access 'name' before initialization

// Q.24.
// let name = "Shruti";
// function myName() {
//   console.log(name);
// }
// myName(); // Shruti

// Scope of let is block level

// Q.25.
// Template Literal
// console.log(`${((x) => x)("I love")} to program`); // I love to program
// console.log(((x) => x)("I love")); // I love
// It is an arrow function, which returns a string "I love"
