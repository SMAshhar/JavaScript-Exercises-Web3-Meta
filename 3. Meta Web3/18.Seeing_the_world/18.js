var loc = ["Everest", "Bahamas", "Maldives", "Aansu lake"];
// List made

console.log("Original: " + loc);   // Original

console.log("Sorted while not changing original: " + [...loc].sort());   // Sorted

console.log("Original is same: " + loc);   // Still the same

console.log("Reversing while not changing original: " + [...loc].reverse());  // Reverse order

console.log("Original is same: " + loc);  // Still the same 

console.log("Reverse the list: " + loc.reverse()); // Reverse the list
console.log("Reverse the list again: " + loc.reverse()); // Again reverse

loc = loc.sort();
console.log("Original changed: "  + loc);   // Sorting original

loc = loc.reverse();
console.log("Reversing: " + loc);   // Reverser alphabatical order



