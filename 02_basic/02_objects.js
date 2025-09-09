// ============================== Object Creation and Property Access ============================================================
// const User = {
//     name:"Vijay",
//     age : 23,
//     email:"vijay@gmail.com",
//     city:"pune",
//     lastLogin:["Mondya","Friday"]
// };

// console.log(User.name);         // Vijay
// console.log(User["name"]);      // Vijay


// ============================== Updating Object Properties & Object.freeze() ==========================================================================================
// console.log(User);              
// User.email = "VijayUpdate@gmail.com"
// User.age = 22;
// User["city"] = "Viman Nagar"
// console.log(User);              
// Object.freeze(User);            // can not be changed any value inside User object


// ============================== Adding Methods to Objects ========================================================================================================================
// User.greeting=function(){
//     console.log("Good Morning!!!"); 
// }
// console.log(User.greeting());                    // Good Morning

// User.greetingtwo=function(){
//     console.log(`Good Morning.. ${User.name}`);
// }
// console.log(User.greetingtwo());                 // Good Morning.. Vijay

// User.greetingthree=function(){
//     return (`Good Morning.. ${this.name}`);
// }
// console.log(User.greetingthree());               // Good Morning.. Vijay


// ============================== Creating Empty Object and Adding Properties ==========================================================================================
// const tinderUser ={};
// tinderUser.name= "Vijay";
// tinderUser.age = 22;
// tinderUser.email = "Vijay@tinder.com";
// console.log(tinderUser);                    // { name: 'Vijay', age: 22, email: 'Vijay@tinder.com' }


// ============================== Nested Objects and Accessing Properties ==========================================================================================
// const User = {
//     mail : "vijay@user.com",
//     age:30,
//     name:{
//         fname:"vijay",
//         lname:'patil'
//     }
// };
// console.log(User.name.fname);           // vijay
// console.log(User["name"]["lname"]);     // patil


// ============================== Merging Objects ==========================================================================================
//  const obj1={1:"a", 2:'b'};
//  const obj2={3:'c', 4:'d'};
//  const obj3={5:'e', 6:'f'};
// //  console.log(obj1+obj2);        // [object Object][object Object]

//  const obj4= {obj1,obj2}
//  console.log(obj4);             // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Object.assign(target, ...sources)
// target → The object where properties will be copied.
// sources → One or more source objects whose properties will be copied into the target.

// const  Merge = Object.assign ({}, obj1,obj2,obj3);
// console.log( Merge);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj1);            // { '1': 'a', '2': 'b' }     property of all three obj copied to {}

// const objMerge = Object.assign (obj1,obj2,obj3);
// console.log(objMerge);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj1);              // obj1 mutated → contains all merged properties

// const objmerge={...obj1,...obj2,...obj3}
// console.log(objmerge);              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// ============================== Array of Objects and Accessing ===========================================================================================================
//     { name : "Vijay",
//         id : 1
//     },
//     { name : " raj",
//         id : 2    
//     },
//     { name : " nayan",
//         id : 3
//     }
// ]

// console.log(User[0].name);      // Vijay
// console.log(User[1]["id"]);     // 2


// ============================== Object Utility Methods (keys, values, entries) ===========================================================================================================
// const tinderUser ={};
// tinderUser.name= "Vijay";
// tinderUser.age = 22;
// tinderUser.email = "Vijay@tinder.com";

// console.log(Object.keys(tinderUser));       // [ 'name', 'age', 'email' ]
// console.log(Object.values(tinderUser));     // [ 'Vijay', 22, 'Vijay@tinder.com' ]
// console.log(Object.entries(tinderUser));    // [ [ 'name', 'Vijay' ], [ 'age', 22 ], [ 'email', 'Vijay@tinder.com' ] ]


// ============================== Destructuring Objects ===========================================================================================================
// Destructuring lets you unpack values from objects/arrays into variables easily

// const course={
//     coursename : "JS",
//     price : 999,
//     teacher : "Hiesh sir chai with code"
// }

// console.log(course.teacher)         // Hiesh sir chai with code

// const {teacher}=course;
// console.log(teacher);               // Hiesh sir chai with code

// const {teacher :guide } = course
// console.log(guide);                 // Hiesh sir chai with code
