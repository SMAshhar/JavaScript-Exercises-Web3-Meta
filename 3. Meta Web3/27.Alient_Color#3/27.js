var list1 = ["green", "red", "yellow"];
var paint = "";

for (var i = 0; i < 3; i++) {
    paint = list1[i]
    if (paint === "green") {
        console.log("Player earned 5 pmoints ");
    } else if (paint ===  "yellow") {
        console.log("Player earned 10 points");
    } else if (paint === "red") {
        console.log("player earned 15 points")
    }

}
