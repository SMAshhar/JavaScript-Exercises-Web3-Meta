var name_array = ["Bari Ammi" , "Taya Abbu", "Ache Abbu"];

for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", please give us the pleasure of your company for dinner tonight.");
}

console.log(name_array[1] + " can't make it. Lets call someone else.");

name_array[1] = "Chote chacha";
for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", please give us the pleasure of your company for dinner tonight.");
}

console.log("\nGood news everuy one, we room for more guests.\n");

name_array.push("Mamoon");
name_array.splice(name_array.length/2, 0,  "Khala");
name_array.unshift("Nana");

console.log(name_array);

for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", please give us the pleasure of your company for dinner tonight.");
}

console.log("Sorry guys, no dinner for anyone. Wo Light chali gai thee, or Khalo ka accident bhi hogaya he. May be next time.");

var x = "";

for (var i = name_array.length; i > 2; --i) {
    x = name_array.pop()
    console.log("Sorry " + x + ", we can't invite you to dinner.");
}

for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", You are still invited to dinner.");
}
