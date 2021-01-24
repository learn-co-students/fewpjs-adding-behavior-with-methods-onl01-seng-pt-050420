class Cat{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} says meow!`);
    }
}

class Dog{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} says woof!`)
    }
}

class Bird{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`It\'s me! ${this.name}, the parrot`)
    }
}