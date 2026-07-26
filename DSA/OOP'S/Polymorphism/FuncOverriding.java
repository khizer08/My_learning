public class FuncOverriding {
    public static void main(String args[]) {
        Deer d1=new Deer();
        d1.eats();
    }
}

class Animal {
    void eats() {
        System.out.println("Eating...");
    }
}

class Deer {
    void eats() {
        System.out.println("Eats grass...");
    }
}