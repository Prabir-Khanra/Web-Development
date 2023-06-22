class Romio {
    skill () {
        console.log(`Public Speaking`)
    }
    strength () {
        console.log(`very strong`)
    }
}

class Jidan extends Romio{
    techKnowledge() {
        console.log(`like technoloy and use technology`)
    }
    gfKnowledge() {
        console.log(`Love guru`)
    }
}

var a1 = new Jidan
a1.skill()
a1.techKnowledge()
