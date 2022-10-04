var name = "  \t John \n Morison    ";
console.log(name);
var name_strip = name.split(" ").join(" ");
name_strip = name_strip.replace(/\s+/g, ' ');
console.log(name_strip);