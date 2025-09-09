// What is Scope in JS?
// Scope in JavaScript means where a variable can be accessed (its visibility or lifetime) in your code.

// There are mainly 3 types of scope:

//     Global Scope      - Variables declared outside any function/block can be accessed anywhere.
//     Function Scope    – Variables declared inside a function are only accessible inside that function.
//     Block Scope       – Variables declared with let or const inside { } can only be accessed in that block. (var ignores block scope).   


//  ===============================  Global Scope ===============================================================================================
// let name = "Vijay";  // global scope
// function greet() {
//   console.log("Hello " + name);  // accessible
// }
// greet();  // Hello Vijay
// console.log(name);  // Vijay

//  ===============================  Function Scope ===============================================================================================
// function test() {
//   let x = 10;   // function scope
//   console.log(x); // accessible here
// }

// test();
// console.log(x); // ❌ Error: x is not defined


//  ===============================  Block Scope ===============================================================================================

// if (true) {
//   let y = 20;   // block scope
//   console.log(y); // accessible here
// }

// console.log(y); // ❌ Error: y is not defined

// ==============================================================================================================================================================================================
// Both function scope and block scope variables cannot be accessed globally if they are declared inside.
// But there is one key difference:

// Function Scope → Works with var, let, const. Variables live only inside the function.
// Block Scope → Works only with let and const. Variables live inside { } blocks (like if, for, while).
// var ignores block scope but respects function scope.



// ✅ Summary

// Function Scope: Inside function only.
// Block Scope: Inside { } block only.
// Global Scope: Everywhere. 
// var = function scoped
// let/const = block scoped
// ==============================================================================================================================================================================================





// ==============================================================================================================================================================================================
                                        // Closure
// ==============================================================================================================================================================================================

// A closure is when a function remembers variables from its outer function’s scope, even after the outer function has finished running.

// 👉 In short: Inner function + Outer function’s variables = Closure


// function outer() {
//   let count = 0;   // outer variable

//   function inner() {
//     count++;       // inner can use outer variable
//     console.log(count);
//   }

//   return inner;
// }

// let counter = outer();  // outer() runs, returns inner()

// counter(); // 1
// counter(); // 2
// counter(); // 3
