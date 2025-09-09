// const user={
//     name:   "vijay",
//     price:  999,
//     welcome: function(){
//                 console.log(`${user.name} welcome to website and thanks for paying ${user.price}rs`);
//                             // vijay welcome to website and thanks for paying 999rs
//                 console.log(`${this.name} welcome to website and thanks for paying ${this.price}rs`);
//                             //  vijay welcome to website and thanks for paying 999rs
//                 console.log(this); 
//                             // { name: 'vijay', price: 999, welcome: [Function: welcome] }
                
//                 }
// }
// user.welcome()

// Why this is better:
// If the object name changes (user → customer), you don’t need to change all references inside the method.
// this always refers to the current object that is calling the method.




// ===========================================================================================================================
//                        Arrow Function in JavaScript
// ===========================================================================================================================
// An arrow function is a shorter way to write functions using =>.
// It does not have its own this, and is usually used for simple functions.



// -----------Traditional function-----------
//   function greets (){
//     console.log("hello");
//   }
//   greets()

//----------- Arrow function-----------
// const greet = () => console.log("Hello!");
// greet(); // Hello!



// // -----------Traditional function-----------
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2,3));


// // -----------Arrow function-----------
// const adds = (a, b) => a + b;
// console.log(adds(4,5));


// // =============================Details in Arrow function=======================================================

// () => {}
// fun_name = () => {return}


// ============================================================================================================================================================
// Below all method are corret for arrow function
// use ""return"" when using " {  } "
// dont use return when not using " ( ) "

// const add = (x,y) => {
//     return x+y
// }
// console.log(add(6,3));

// const add1 = (x,y) => { return x+y }
// console.log(add1(6,3));

// const add3 = (x,y) =>  x+y 
// console.log(add3(6,3));

// const add4 = (x,y) =>  (x+y )
// console.log(add4(6,3));