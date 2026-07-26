public class MultipleInheritance {
    public static void main(String[] args) {
        Bear b=new Bear();
        b.eats();
    }
}

interface Herbivores {
    void eats();
}

interface Carnivores {
    void eats();
}

class Bear implements Herbivores, Carnivores {
    public void eats() {
        System.out.println("Eats both ");
    }
}