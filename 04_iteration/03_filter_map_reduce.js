// ================================================================================================================================================================
//                                    FILTER
// ===============================================================================================================================================================

// ============================== filter: Numbers Greater than or Equal to 7 ==============================
// Logic: filter creates a new array with elements passing the condition.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnum = numbers.filter((num) => num >= 7)
// console.log(newnum);      // [7, 8, 9, 10]


// ============================== filter: Even Numbers ==============================
// Logic: Only numbers divisible by 2 are kept in the new array.
// const even = numbers.filter((num) => num % 2 == 0)
// console.log(even);        // [2, 4, 6, 8, 10]


// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums=[]
// numbers.forEach( (num)=>{
//     if (num<6) newnums.push(num)
// })
// console.log(newnums);



// ================================================================================================================================================================
//                                    MAP
// ===============================================================================================================================================================

// map() creates a new array by applying a function to each element of the original array.

// ================== map() simple addition ==================
// Adds 10 to every element
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = numbers.map((num) => num+10)
// console.log(newnums); // [11,12,13,14,15,16,17,18,19,20]


// ================== map() with condition ==================
// Returns true/false for each element >5
// const nums = numbers.map((num) => num>5)
// console.log(nums); // [false,false,false,false,false,true,true,true,true,true]


// ================== map() chaining + filter ==================
// Step1: multiply by 10 → Step2: add 1 → Step3: keep only >40
// const newnum = numbers
//                 .map((num) => num*10)   // [10,20,30,40,50,60,70,80,90,100]
//                 .map((num) => num+1)    // [11,21,31,41,51,61,71,81,91,101]
//                 .filter((num) => num>40) // [41,51,61,71,81,91,101]

// console.log(newnum);




// ================================================================================================================================================================
//                                    REDUCE
// ===============================================================================================================================================================
