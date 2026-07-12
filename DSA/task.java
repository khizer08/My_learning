// import java.util.*;

public class task {
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;

    }

    public static void count_prime(int num) {
        for (int i = 1; i <= num; i++) {
            if (isPrime(i) == true) {
                System.out.println(i);
            }
        }
    }

    public static void main(String arg[]) {
        count_prime(10);
    }
}
