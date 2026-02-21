import java.util.*;

public class task {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a = 10, b = 50, c = 30;
        int max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        System.out.println("largest: " + max);
        sc.close();
    }
}