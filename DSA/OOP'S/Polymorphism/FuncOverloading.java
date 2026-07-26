public class FuncOverloading {
    public static void main(String[] args) {
        Calculator cal = new Calculator();

        System.out.println(cal.sum(1, 2));
        System.out.println(cal.sum((float) 1.5, (float) 2.5));
        System.out.println(cal.sum(2, 4, 8));
    }
}

class Calculator {
    int sum(int a, int b) {
        return a + b;
    }

    int sum(int a, int b, int c) {
        return a + b + c;
    }

    float sum(float a, float b) {
        return a + b;
    }
}
