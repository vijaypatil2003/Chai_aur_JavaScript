// ============================== For loop with index ===========================================================
// What: Iterates using index values of an array.
// Logic: `for (i=0; i<length; i++)` gives each index number until array end.
// myarr=[1,2,3,4,5,6,7];
// for (i=0;i<(myarr.length);i++){
//     console.log(i);
// }

// 👉 for...in → gives keys (object) or indexes (array).
// 👉 for...of when you want direct values from arrays.



// ============================== For..of loop with values ===========================================================
// What: Iterates directly over values of an array.
// Logic: `for (const val of arr)` gives each element instead of index.
// myarr=[1,2,3,4,5,6,7];
// for (const val of myarr) {
//     console.log(val);
// }


// ============================== For..of loop over string ===========================================================
// What: Iterates each character in a string with conditions.
// Logic: `continue` skips spaces, `break` stops loop at ".".
// str="Hello World!!!..."
// for (let greet of str){
//     if (greet==" " ) continue;
//     if (greet==".") break;
//     console.log(greet);
// }




// ============================== for...in Loop on Object ===========================================================
// Logic: Iterates over object keys; access values using object[key].
// const language ={
//     "cpp" : "c++",
//     "py" : 'python',
//     "js" :  "java script" 
// }
// for (const keys in language){
//     console.log(keys,':', language[keys]);   // cpp : c++ ...
// }


// ============================== for...in Loop on Array ===========================================================
// Logic: Iterates over array indexes; access values using array[index].
// const programming=['py','js','cpp','java','c']
// for(const i in programming){
//     console.log(programming[i]);   // py js cpp java c
// }


// ============================== forEach with Normal Function ===========================================================
// Logic: forEach runs a callback on each array element.
// const programing=['py','js','cpp','java','c']
// programing.forEach(function(item) {
//     console.log(item);   // py js cpp java c  
// })


// ============================== forEach with Arrow Function ===========================================================
// Logic: Same as above, but using arrow function for cleaner syntax.
// const programing=['py','js','cpp','java','c']
// programing.forEach((item) => {
//     console.log(item);   // py js cpp java c
// })



// ============================== forEach with Value, Index, and Array =========================================================
// Logic: forEach can take 3 arguments → value, index, and the whole array.
// const programing = ['py','js','cpp','java','c']
// programing.forEach((val, index, arr) => {
//     console.log(val, index, arr); 
    // val → current element
    // index → position of element
    // arr → the original array
// })
