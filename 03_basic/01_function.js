// ============================== Function: no return vs return ==============================
// What: Shows a function that logs the sum (no return) and another that returns the sum.
// Logic: If a function doesn't `return`, the caller gets `undefined`; using `return` returns the computed value.
// ===================================================================================================================================================================

// function addTwoNumber (num1,num2){
//     console.log(num1+num2);             // thos function doesnot return any value 
// }
// result  = addTwoNumber(6,3)               // 9
// console.log(result);                      // undefined


// function addTwoNumber (num1,num2){
//     ans=num1+num2
//     return ans                              // this function  return values
// }
// result  = addTwoNumber(6,3)               
// console.log(result);                      // 9


// 
// ============================== Function parameters and missing args ==============================
// What: Demonstrates a function using a parameter inside a template string when called with or without arguments.
// Logic: Missing parameters are `undefined`; template literals coerce `undefined` to string "undefined" inside the returned text.
// ===================================================================================================================================================================

// function login(username){
//     return `${username} jut logged in...`
// }
// console.log(login("Vijay"));                // Vijay jut logged in...
// console.log(login(" "));                    //   jut logged in...
// console.log(login());                       // undefined jut logged in...


// ============================== Function args behavior: single param vs extra args vs rest operator ==============================
// What: Shows that a single named parameter receives only the first value, while `...rest` collects all args into an array.
// Logic: Extra arguments are ignored unless you use the rest parameter (`...`) which groups them into an array.
// ===================================================================================================================================================================

//  function calculatCartprice1(num){
//     return num
//  }
//  console.log(calculatCartprice1(500));               // 500
 

//  function calculatCartprice2(num){
//     return num
//  }
//  console.log(calculatCartprice2(500,300,200));      // 500


//   function calculatCartprice3(...num){
//     return num
//  }
//  console.log(calculatCartprice3(500,300,200));       // [ 500, 300, 200 ]



// ============================== Passing objects to functions ==============================
// What: Passes an object into a function and accesses its properties inside the function.
// Logic: Objects are passed by reference (the function receives the same object reference), so you can read or modify its properties.
// ===================================================================================================================================================================

// const userInfo={
//     name:"vijay",
//     age:22
// };

// function handleObject(anyobject){
//     console.log(`User name is ${anyobject.name} and User age is ${anyobject.age}`);   
// }                           //  User name is vijay and User age is 22
// handleObject(userInfo)


// 
// ============================== Accessing array elements inside a function ==============================
// What: Function receives an array and returns the second element (index 1).
// Logic: Arrays are indexed starting at 0; `value[1]` returns the element at index 1 (the second item).
// ===================================================================================================================================================================

// arr=[100,200,300,400]

// function getSecondvalue (value){
//     return value[1]
// }
// console.log(getSecondvalue(arr));       // 200



// ===================================================================================================================================================================




































// ===================================================================================================================================================================
// function addTwoNumber (num1,num2){
//     console.log(num1+num2);             // thos function doesnot return any value 
// }
// result  = addTwoNumber(6,3)               // 9
// console.log(result);                      // undefined


// function addTwoNumber (num1,num2){
//     ans=num1+num2
//     return ans                              // this function  return values
// }
// result  = addTwoNumber(6,3)               
// console.log(result);                      // 9


// ===================================================================================================================================================================


// function login(username){
//     return `${username} jut logged in...`
// }
// console.log(login("Vijay"));                // Vijay jut logged in...
// console.log(login(" "));                //   jut logged in...
// console.log(login());                // undefined jut logged in...

// ===================================================================================================================================================================

//  function calculatCartprice1(num){
//     return num
//  }
//  console.log(calculatCartprice1(500));               // 500
 

//  function calculatCartprice2(num){
//     return num
//  }
//  console.log(calculatCartprice2(500,300,200));      // 500


//   function calculatCartprice3(...num){
//     return num
//  }
//  console.log(calculatCartprice3(500,300,200));       // [ 500, 300, 200 ]


// ===================================================================================================================================================================
// const userInfo={
//     name:"vijay",
//     age:22
// };

// function handleObject(anyobject){
//     console.log(`User name is ${anyobject.name} and User age is ${anyobject.age}`);   
// }                           //  User name is vijay and User age is 22
// handleObject(userInfo)



// ===================================================================================================================================================================
// arr=[100,200,300,400]

// function getSecondvalue (value){
//     return value[1]
// }
// console.log(getSecondvalue(arr));       // 200



// ===================================================================================================================================================================
