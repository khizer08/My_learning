public class OOPS {

    public static void main(String args[]) {
        Pen p1 = new Pen();
        
        p1.setColor("red");
        System.out.println(p1.getColor());

        p1.setTip(5);
        System.out.println(p1.getTip());
    }

}

class Pen {
    private String color; // cannot be access directly as its "private"
    private int tip;

    void setColor(String newColor) {
        color = newColor;
    }

    void setTip(int newTip) {
        tip = newTip;
    }

    String getColor() {
        return this.color; // "this" refers to current object.
    }

    int getTip() {
        return this.tip;
    }
}
