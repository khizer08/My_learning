public class optimised_primeNumber {

    public static boolean isPrime(int n) {
        
        if (n <= 1) {
            return false;
            // as we know "0" and "1" is "Not a prime" , and negative numbers are not
            // included in prime.
        }

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;

    }

    public static void main(String[] args) {
        System.out.println(isPrime(9));
    }
}