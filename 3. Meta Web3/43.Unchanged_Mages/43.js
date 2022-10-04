var mages = ['Hamoon', 'Bil-batori', 'Zakoota Jin'];
var mages_copy = [];

function show_magicians(arr) {
    for (a in arr) {
        console.log(arr[a]);
    }
}
show_magicians(mages)

function make_great(arr1, arr2) {
    for (a in arr1) {
        arr2[a] = "The great " + arr1[a]
    }
}
make_great(mages, mages_copy)
console.log(mages_copy)
console.log(mages)