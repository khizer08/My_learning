package DSA;

public class task {
    public static void main(String[] args) {
        int a = 10, b = 12, c = 4;

        int max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        System.out.println(max);
    }

}
