var name  = " Hello Ali, Are you planning to learn JS today?";
name = name.trim()
name_lower = name.toLowerCase();
name_upper = name.toUpperCase();

var nameToList = name_lower.split(" ");

var x = "";
for (var i = 0; i < nameToList.length; i++) {
    x = nameToList[i]
    nameToList[i] = x.charAt(0).toUpperCase() + nameToList[i].slice(1,)
}
var name_title = nameToList.join(" ");

console.log(name_lower);
console.log(name_upper.toUpperCase());
console.log(name_title);


