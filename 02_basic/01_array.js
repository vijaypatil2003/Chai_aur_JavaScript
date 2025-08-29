// ============================== Array Creation and Basic Operations ==============================
// my_arr=[1,2,3,4,"Vijay",true, false, null]
// console.log(my_arr);                            // [ 1, 2, 3, 4, 'Vijay', true, false, null ]

// arr= new Array(1,2,3,4,5,6);
// console.log(arr);                               // [1,2,3,4,5,6]

// arr=[0,1,2,"a",'b','c']
// console.log(arr)                    // [ 0, 1, 2, 'a', 'b', 'c' ]

// arr.push(3)                     // Add element to last 
// console.log(arr)                // [ 0, 1, 2, 'a', 'b', 'c', 3 ]

// arr.pop()                          // Remove element from last
// console.log(arr)                   // [ 0, 1, 2, 'a', 'b']

// arr.unshift(11)                   // add element  to zero index
// console.log(arr);                 // [ 11, 0, 1, 2, 'a', 'b', 'c']

// arr.shift()                      // remove element from  first index
// console.log(arr);                // [1, 2, 'a', 'b', 'c']


// ============================== Array Methods: includes, indexOf, sort ==============================
// arr=[0,1,2,"a",'b','c']
// console.log(arr)                        // [0,1,2,"a",'b','c']
// arr.push(11);     console.log(arr)      // [0,1,2,"a",'b','c', 11]
// arr.pop();        console.log(arr)      // [0,1,2,"a",'b','c']
// arr.unshift(22);   console.log(arr)     // [22,0,1,2,"a",'b','c']
// arr.shift();       console.log(arr)     // [0,1,2,"a",'b','c']
// console.log(arr.includes("a"));         // true
// console.log(arr.includes(14));          // false
// console.log(arr.indexOf("c"));          // 5
// console.log(arr.indexOf(99));           // -1
// arr=['d',1,3,'c','a',0,2,'b']
// console.log(arr.sort());                // [0,1,2,3,'a','b','c','d']


// ============================== join() Method and Type Conversion ==============================
// arr=[0,1,2,"a",'b','c']; 
// console.log(arr); console.log(typeof(arr));         // [ 0, 1, 2, 'a', 'b', 'c' ]  object
// str_arr=arr.join() ; 
// console.log(str_arr); console.log(typeof(str_arr)); // 0,1,2,a,b,c       string


// ============================== slice() vs splice() ==============================
// arr  =[0,1,2,3,4,5]
// console.log("orignal arr: ",arr);           // [ 0, 1, 2, 3, 4, 5 ]

// console.log(arr.slice(1,4));                // [ 1, 2, 3 ] does not include last index (slice from index 1-3)
// console.log("array after slice: ",arr);     // [ 0, 1, 2, 3, 4, 5 ] no change to orignal array

// console.log(arr.splice(1,4));               // [ 1, 2, 3, 4] include last index (slice from index 1-4)
// console.log("array after splice: ",arr);    // [ 0, 5 ] change to orignal array remove splice part from orignal array permanant


// ============================== Nested Arrays =============================================
// const heros=["salman",'sharuk','ajay','rajni'];
// const heroien=['anuska','katrina','dipika']
// heros.push(heroien);            // ["salman",'sharuk','ajay','rajni', ['anuska','katrina','dipika']]
// console.log(heros)
// console.log(heros[4]);          // [ 'anuska', 'katrina', 'dipika' ]
// console.log(heros[4][0]);       // anuska


// ============================== concat() vs spread operator ==============================
// const heros=["salman",'sharuk','ajay','rajni'];
// const heroien=['anuska','katrina','dipika']
// console.log(heros.concat(heroien));     // (concat method)["salman",'sharuk','ajay','rajni','anuska','katrina','dipika']
// console.log([...heros,...heroien]);     // (spread method)["salman",'sharuk','ajay','rajni','anuska','katrina','dipika']


// ============================== flat() method ===========================================================================
// arr=[1,2,3,[4,5,6],7,8,[9,[10,11]]];
// console.log(arr.flat(0));           // [ 1, 2, 3, [ 4, 5, 6 ], 7, 8, [ 9, [ 10, 11 ] ] ]
// console.log(arr.flat(1));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ] ]
// console.log(arr.flat(2));           // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]
// console.log(arr.flat(Infinity));    // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


// ============================== Array.isArray() and Array.from() ===========================================================================

//  console.log(Array.isArray("Hitesh"));      // false
//  console.log(Array.from("Hitesh"));         // [ 'H', 'i', 't', 'e', 's', 'h' ]
//  console.log(Array.from('Hello World!'));   // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']


// ============================== Array.of() method ===========================================================================

// const name1="vijay"; age1=21; from1="pune";
// const name2="Ram"; age2=29; from2="mumbai";

// console.log(Array.of(name1,age1,from1));    // [ 'vijay', 21, 'pune' ]
// console.log(Array.of(name2,age2,from2));    // [ 'Ram', 29, 'mumbai' ]
