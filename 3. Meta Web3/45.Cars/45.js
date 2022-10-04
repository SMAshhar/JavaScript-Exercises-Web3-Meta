var cars = {};

function car(mfg, model, ...fav) {
    cars = {
        manufacturer:mfg,
        model_is : model,
    }
    for (var i = 0; i<fav.length; i++) {
        cars[`${i}`]= fav[i]
    }
    return cars
}

console.log(car("Toyota", "Corolla", "White", "20"))