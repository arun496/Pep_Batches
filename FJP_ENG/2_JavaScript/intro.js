// Top to bottom, left to right
// Print something
// console.log("Hello World!!");

// Variables Declaration
// let => Keyword to declare variables
// let a = 10;
// console.log("My variable", a);

// JS is dynamically typed Language
// a = "GoodBye";
// console.log("My variable", a);

// a = 1.0111
// let b = "Goodbye";
// console.log("My variable", a, b);

// a = true;
// console.log("My variable", a);


// if (a == true) {
//     console.log("This is true condition");
// } else {
//     console.log("This is false condition");
// }

// let endLimit = 5;
// for (let i = 0;i < endLimit;i++) {
//     console.log("Hello", i, "- times");
// }

/***********************************************************************************/


// Datatypes => Primitive, Non-primitive
// Primitive => Number, string, boolean, null, undefined

// let x = null; // Non-existent

// Only Declare a variable
// let y; // undefined => Non-existent
// console.log(x, y);


// Comments in Javascript => // single line
/*
fghjkv 
xdfg
*/
/***********************************************************************************/

// Non-Primitive => Array, Object, Function

// Function Definition
// function printValue(param1, param2) {
//     console.log("Hello World!!", param1, param2);
//     return (Math.random() > 0.5) ? false : "Not";
// }

// // Function call or invocation
// let rVal = printValue(100, true);
// console.log(rVal);

// Function as a value in a variable
// let fn = function printVal() {
//     console.log("Hello world");
// }
// console.log(fn);

// Arrays declaration
// let arr1 = [1, 2, 3, 4];
// arr1[0] = 100;
// console.log(arr1);
// let arr2 = arr1;
// arr2[1] = 100;
// console.log(arr2[1]);

// let arr3 = arr1.slice(1, 3);
// arr3[0] = 100;
// console.log(arr1, arr3);

// Dynamic
// let arr2 = [
// 1, 2, 556, 677, "Hellow", true,
// function someting() {
//     console.log("In array");
// },
// 'Bye'
// ];

// let fn = arr2[6];
// fn();
// console.log(fn);

// console.log(arr1.length);

let arr = [1, 2, 3];
// Push, pop, shift, unshift
arr.push(4); //push @ end of arr
arr.push(5);
// console.log(arr);
// console.log(arr.pop(), arr); // Remove from last in arr
// console.log(arr.pop(), arr);

// console.log(arr.shift(), arr); // Remove from front in arr
// console.log(arr.shift(), arr);
arr.unshift(100); // Add from front in arr
arr.unshift(200);