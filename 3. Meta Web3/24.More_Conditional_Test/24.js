// Test 1:
var x = "Some";
if (x === "dang") {
    alert('True');
} else {
    alert("False");
}
// Test 2:
var x = "Some";
if (x === "some".toLowerCase()) {
    alert('True');
} else {
    alert("False");
}
// Test 3:
var x = 3;
if (x === 3 && x !== 5 || x  > 2 || x >= 3 && x <= 5) {
    alert("YESSSS .... !!!");
}
// Test 4:
var x = [1, 3, 5, 6, 7];
if (x.includes(13)) {
    alert("The number is in");
} else {
    alert("The number is out");
}
