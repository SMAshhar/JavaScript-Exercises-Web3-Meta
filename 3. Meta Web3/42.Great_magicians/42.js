var mages = ['Hamoon', 'Bil-batori', 'Zakoota Jin'];

function show_magicians(arr) {
    for (a in arr) {
        console.log(arr[a]);
    }
}
show_magicians(mages)

function make_great(arr) {
    for (a in arr) {
        arr[a] = "The great " + arr[a]
    }
}
make_great(mages)
show_magicians(mages)