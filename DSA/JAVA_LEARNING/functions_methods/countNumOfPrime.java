import java.util.*;

public class countNumOfPrime {

    public static boolean isPrime(int number) {// to find prime

        if (number <= 1) {
            return false;
            // as we know "0" and "1" is "Not a prime" , and negative numbers are not included in prime.
        }
        if (number == 2) {
            return true;// edge case handling.
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {// optimsed loop
            if (number % i == 0)
                return false;
        }
        return true;
    }

    public static void numOfPrime(int n) {// to find all prime numbers
        for (int i = 2; i <= n; i++) {
            boolean result = isPrime(i);
            if (result == true) {
                System.out.print(i + " ");
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the range to find the prime numbers: ");
        int n = sc.nextInt();
        numOfPrime(n);

        sc.close();
    }

}