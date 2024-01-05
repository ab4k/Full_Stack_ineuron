// Time stamp: 39: 13
// https://youtu.be/SFgppU2J8To?si=NEpvWrUHQCr1EpQT
// Q.1.
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// Choose the correct one for output to be 6:
// A: sumValues([...1, 2, 3]);
// B: sumValues([...[1, 2, 3]]);
// C: sumValues(...[1, 2, 3]); ✔
// D: sumValues([1, 2, 3]);

// console.log(sumValues(...[1, 2, 3])); // 6

// Q.2.
// const myString = "code steo by step";
// console.log(!typeof myString === "object"); // false
// console.log(!typeof myString === "string"); // false
// In above question there are two operators ! and === the flow of code is from left to right.
// So first the negation works and on the output of negation === is performed.

// console.log(typeof myString); // string
// console.log(!typeof myString); // false
// console.log(!typeof myString === "string"); // false === 'string' -> false
// console.log(!typeof myString === false); // true

// Q.3.
// const friend = "Shreyansh";
// const age = 22;
// console.log(isNaN(friend)); // true
// console.log(isNaN(age)); // false

// Q.4.
// let person = { name: "Anil" };
// Object.seal(person);
// What can modify the person object ?

// person.age = 23; // The person object remains unchanged, because seal prevents it from addition of new keys: values, but the previous value can be modified.
// person.name = "Vimal";
// console.warn(person); // { name: 'Vimal' }

// Q.5.
// let arr = [2, 9, 0, 10];
// Remove first element from arr
// arr.shift();
// console.warn(arr);

// Q.6.
// let newArr = [12, 99, 30, 17];
// Remove last element from newArr
// newArr.pop();
// console.warn(newArr);

// Q.7.
// Check a number is odd or even?

// const num = 5;
// if (num % 2 == 0) {
//   console.warn("Even");
// } else {
//   console.warn("Odd");
// }

// Q.8.
// let data = {
//   name: "Anuj",
// };
// delete data.name;
// console.warn(data); // {}

// Q.9.
// let data1 = "true";
// Convert data to boolean false value
// console.warn(!data1); // false
// console.warn(typeof !data1); // boolean

// Q.10.
// let data2 = "true";
// Convert data to boolean true value
//🖊[[ console.warn(typeof data2); // string

// data2 = Boolean(data2); // Converted to boolean
// console.warn(data2); // true
// console.warn(typeof data2); // boolean], "My answer"]

// console.warn(!!data2); // true
// console.warn(typeof !!data2); // boolean

// Q.11.
// Difference between map and foreach function ?
// The map() method returns a new array, whereas the forEach() method does not return a new array.

// Q.12.
// let nums = [12, 34, 56];
// delete nums[1];
// console.warn(nums); // [12, empty, 56]

// Q.13.
// let nums1 = [23, 3, 45];
// delete nums1[1];
// console.warn(nums1.length); // 3
// let nums2 = [2, 3, null, undefined, 6, 7];
// console.warn(nums2.length); // 6
// let a = [2, 3, 4, 5];
// console.warn(a.length); // 4
// a.pop();
// console.warn(a.length); // 3

// Q.14.
// Merge two arrays

// let a = [2, 45, 6, 67];
// let b = [34, 98, 78, 44];
// let c = [...a, ...b];
// console.warn(c);

// Q.15.

// let a = [2, 45, 6, 67];
// let b = [34, 98, 78, 45];
// let c = [...a, ...b];
// console.warn(c); // [2, 45, 6, 67, 34, 98, 78, 45];
// The duplicate remains there.

// Q.16.
// let d = 3 ** 3;
// console.warn(d); // 3^3 = 27

// Q.17.
// let a = 2;
// setTimeout(() => {
//   console.warn(a); // 100
// }, 0);
// a = 100;

// setTimeout is the reason, even the time is 0 second, the function will give priority to variables having no waiting time.

// Q.18.
// let a = 57;
// let A = 90;
// console.warn(A); // 90
// a & A are not same variables

// Q.19.
// let A10 = "Rama";
// let 10A = "Krishna";  // Variable name starting with numbers are not allowed.
// console.warn(A10); // Rama
// console.warn(10A);

// Q.20.
// let first = "First";
// let second = `First`;
// console.warn(first === second); // true

// Q.21.
// let a = 1;
// let c = 2;
// console.warn(--c === a); // true

// Q.22.
// let a = 1;
// let d = 1;
// let g = 2;
// console.warn((a === d) === --g); // true === 1 -> false
// console.warn((a === d) === "true"); // true === 'true' -> false
// console.warn((a === d) === true); // true === true -> true

// Q.23.
// console.warn(3 * 3); // 9
// console.warn(3 ** 3); // 27
// console.warn(3***3); // Error

// Q.24.
// console.warn(a); // undefined
// var a;

// Q.25.
// console.log(b); // b is not defined.
// let b;
