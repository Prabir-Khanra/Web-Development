class Dadu {
    name1 = 'Dadu Waresi'
    jobType1 () {
        console.log(`Food Department`)
    }
}
class Baba extends Dadu{
    // name1 = 'Dadu Waresi'
    // jobType1 () {
    //     console.log(`Food Department`)
    // }
    name2 = 'Romeo Waresi'
    jobType2 () {
        console.log(`Hospital Management`)
    }
}
class Son extends Baba{
        // name1 = 'Dadu Waresi'
    // jobType1 () {
    //     console.log(`Food Department`)
    // }
    // name2 = 'Romeo Waresi'
    // jobType2 () {
    //     console.log(`Hospital Management`)
    // }
    name3 = 'Jidan Waresi'
    jobType3 () {
        console.log(`Developer`)
    }
}

var raj = new Son
console.log(raj.name3)
console.log(raj.name1)