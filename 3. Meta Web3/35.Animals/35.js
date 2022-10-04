var animals = ["cat", "tiger", "lion"];

for (a in animals) {
    if (animals[a] == "cat") {
        console.log("Csats can be taken as pets"); 
    } else if (animals[a]== "tiger") {
        console.log("Tigers are dangerous.")
    } else if (animals[a] == "lion") {
        console.log("Lions are the kings of the jungle")
    }
}

console.log("All the above animals are feline.")