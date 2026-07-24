public class Inheritance {
    public static void main(String[] args) {
        // single level inheritance
        Fish shark = new Fish();
        shark.eat();

        // multi level inheritance
        Dog d1 = new Dog();
        d1.eat();
        d1.legs = 4;
        System.out.println(d1.legs);
    }
}

// Base class
class Animal {
    String color;

    void eat() {
        System.out.println("eats");
    }

    void breathe() {
        System.out.println("breathes");
    }
}

// Derived class
class Fish extends Animal {
    int fins;

    void swims() {
        System.out.println("swims in water");
    }

}

// Multi level inheritance
class Mammal extends Animal {
    int legs;
}

class Dog extends Mammal {
    String breed;
}