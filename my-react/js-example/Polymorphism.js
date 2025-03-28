// overriding

class Animal {
    speak() {
        console.log("동물소리: ");
    }
}

class Cat extends Animal {
    speak() {
        super.speak();
        console.log("야옹");
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("멍멍");
    }
}

let cat = new Cat();
let dog = new Dog();

cat.speak();
dog.speak();
