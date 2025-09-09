
// ============================== Map in JavaScript ==============================
// What: Map stores key-value pairs where keys are unique (no duplicates allowed).
// Logic: `map.set(key, value)` → if the key already exists, its value is updated.
// const map=new Map()
// map.set("In","India");
// map.set("Pak","Pakistan");
// map.set("UK","Unitd Kingdom");
// map.set("In","India");   // duplicate key "In" → overwritten, not added again
// console.log(map);        // Map(3) { 'In' => 'India', 'Pak' => 'Pakistan', 'UK' => 'Unitd Kingdom' }



// ============================== Map Key Overwrite Example ==============================
// What: Map keys are unique, so setting the same key again overwrites its value.
// Logic: "In" is first set to "India", but then updated to "Bharat".
// const map=new Map()
// map.set("In","India");
// map.set("Pak","Pakistan");
// map.set("UK","Unitd Kingdom");
// map.set("In","Bharat");   // overwrites the earlier "India"
// console.log(map);         
// Output → Map(3) { 'In' => 'Bharat', 'Pak' => 'Pakistan', 'UK' => 'Unitd Kingdom' }


// ============================== Iterating Map (Default) ==============================
// Logic: A Map is iterable, each item is returned as [key, value] array.
// const map=new Map()
// map.set("In","India");
// map.set("Pak","Pakistan");
// map.set("UK","Unitd Kingdom");
// for (const item of map){
//     console.log(item);      // [ 'In', 'India' ] [ 'Pak', 'Pakistan' ]   ...
// }


// ============================== Iterating Map with Destructuring ==============================
// Logic: Use [key, value] to directly unpack pairs for easy access.
// const map=new Map()
// map.set("In","India");
// map.set("Pak","Pakistan");
// map.set("UK","Unitd Kingdom");
// for (const [key, value] of map){
//     console.log(key+" : "+value);   // In : India  Pak : Pakistan     ...
// }
