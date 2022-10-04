var name_array = ["Bari Ammi" , "Taya Abbu", "Ache Abbu"];

for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", please give us the pleasure of your company for dinner tonight.");
}

console.log(name_array[1] + " can't make it. Lets call someone else.");

name_array[1] = "Chote chacha";
for (var i = 0; i < name_array.length; i++) {
    console.log("Dear " + name_array[i] + ", please give us the pleasure of your company for dinner tonight.");
}