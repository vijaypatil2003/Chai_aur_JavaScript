// const name ="Vijay";
// const age =22;
// console.log(name+age);      //Vijay22
// console.log(`My name is ${name} and my age is ${age}`);     // My name is Vijay and my age is 22



// const str ="rajesh"
// console.log(str[0]);        //r

// ======================== String Manipulation ====================================

const name = "Vijay";

// ---------- Length ----------
console.log(name.length);                 // 5

// ---------- Uppercase ----------
console.log(name.toUpperCase());    // VIJAY

// ---------- Lowercase ----------
console.log(name.toLowerCase());    // vijay

// ---------- Character at index ----------
console.log(name.charAt(2));        // j

// ---------- Index of character ----------
console.log(name.indexOf('j'));     // 2
console.log(name.indexOf('e'));     // -1 (not present)

// ---------- Substring ----------
let substr = name.substring(1,4);   
console.log(substr);                // ija
substr = name.substring(4); 
console.log(substr);                // y
substr = name.substring(); 
console.log(substr);                // Vijay

// ---------- Slice ----------
let slicestr = name.slice(-4,4);    
console.log(slicestr);              // ija  (-4 => start at "i", 4 => end before "y")

// ---------- Trim ----------
let str = "   vijay    ";
console.log(str);                   // "   vijay    "
console.log(str.trim());            // "vijay"
console.log(str.trimStart());       // "vijay    "
console.log(str.trimEnd());         // "   vijay"

// ========================== Replace =====================================================

let fruit = "apple banana graps orange";

// ---------- Replace first occurrence ----------
let str_replace = fruit.replace(" ",","); 
console.log(str_replace);           // apple,banana graps orange

str_replace = fruit.replace("a","@"); 
console.log(str_replace);           // @pple banana graps orange

// ---------- Replace all (using regex with /g) ----------
str_replace = fruit.replace(/ /g,","); 
console.log(str_replace);           // apple,banana,graps,orange

str_replace = fruit.replace(/a/g,"@"); 
console.log(str_replace);           // @pple b@n@n@ gr@ps or@nge

// ================== Includes ==========================================================

fruit = "1.apple 2.banana 3.graps 4.orange";

console.log(fruit.includes("2.banana"));    // true
console.log(fruit.includes(""));            // true (empty string is always included)
console.log(fruit.includes(" "));           // true
console.log(fruit.includes("x"));           // false
console.log(fruit.includes(2));             // true  (number is converted to string)
console.log(fruit.includes("2"));           // true

// ================== Split (String to Array) ===========================================

fruit = "apple-banana-graps-orange";

// ---------- Split by "-" ----------
let fruitList = fruit.split("-");
console.log(fruitList);  // [ 'apple', 'banana', 'graps', 'orange' ]

