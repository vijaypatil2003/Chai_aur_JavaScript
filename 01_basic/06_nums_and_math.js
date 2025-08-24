// ============================== Numbers =====================================================

// --- Conversion to String ---
// const balance = 25516.5194
// console.log(balance)                      // 25516.5194
// console.log(balance.toString())           // "25516.5194"   (number → string)
// console.log(typeof(balance.toString()))   // string

// --- toFixed (Rounds to fixed decimal places) ---
// console.log(balance.toFixed())            // "25517"   (rounded with 0 decimals)
// console.log(balance.toFixed(2))           // "25516.52" (rounded to 2 decimals)
// console.log(balance.toFixed(4))           // "25516.5194" (4 decimals, original length)

// ========== toLocaleString ==========
// const a = 1000000000
// console.log(a.toLocaleString('en-IN'))    // 1,00,00,00,000   (Indian numbering system)
// console.log(a.toLocaleString('en-US'))    // 1,000,000,000   (US system)
// console.log(a.toLocaleString('de-DE'))    // 1.000.000.000   (German system)


// ============================== Math =====================================================

// --- Absolute Value ---
// console.log(Math.abs(-22))                // 22
// console.log(Math.abs(4))                  // 4

// ========== Math.round ==========
// console.log(Math.round(4.3))              // 4  (nearest integer)
// console.log(Math.round(4.7))              // 5
// console.log(Math.round(4.49999999))       // 4

// ========== Math.ceil ==========
// console.log(Math.ceil(4.0001))            // 5  (always rounds UP)
// console.log(Math.ceil(4.9))               // 5

// ========== Math.floor ==========
// console.log(Math.floor(4.0001))           // 4  (always rounds DOWN)
// console.log(Math.floor(4.9))              // 4

// ========== Math.sqrt ==========
// console.log(Math.sqrt(9))                 // 3
// console.log(Math.sqrt(5))                 // 2.23606797749979

// --- Min / Max ---
// console.log(Math.max(4, 5))               // 5
// console.log(Math.min(4, 5))               // 4

// ========== Math.random ==========
// console.log(Math.random())                // random number between (0 and 1)
// console.log(Math.random() * 6)            // random number between (0 and 6)
// console.log(Math.random() * 10)           // random number between (0 and 10)
// console.log(Math.floor(Math.random() * 100)) // integer between (0 and 99)

// --- Random in range (min to max) ---
// let min = 10, max = 20
// console.log(Math.floor((Math.random() * (max - min)) + min))
// Formula explanation:
// (Math.random() * (max - min)) → gives number in range 0 to (max-min)
// Adding +min → shifts range to min ... max
