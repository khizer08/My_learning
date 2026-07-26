public class AbstractClass {

    public static void main(String[] args) {
        Deer d = new Deer();
        d.eats();
        d.walks();

        Chicken c = new Chicken();
        c.eats();
        c.walks();
    }

}

abstract class Animal {
    void eats() { // non abstract method
        System.out.println("Eating");
    }

    abstract void walks(); // abstract method (so no implementation)
}

class Deer extends Animal {
    void walks() {
        System.out.println("4 legs");
    }
}

class Chicken extends Animal {
    void walks() {
        System.out.println("2 legs");
    }
}
