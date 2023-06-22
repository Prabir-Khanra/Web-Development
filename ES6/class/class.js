class Car {
    carColor() {
        console.log('Red')
    }
    carPrice () {
        console.log(`1.5cr`)
    }
    carCompany () {
        console.log(`Porsche`)
    }
}
class SportsCar {
    carColor() {
        console.log('blue sports car')
    }
}

var marcedes = new Car;
marcedes.carColor()
marcedes.carPrice()

var hby = new SportsCar;
hby.carColor()
