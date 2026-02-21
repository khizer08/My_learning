import java.util.*;

public class binomial_coefficient {

    public static int factCal(int number) {
        int fact = 1;
        for (int i = 1; i <= number; i++) {
            fact *= i;
        }
        return fact;
    }

    public static int binomial_coefficient_cal(int n, int r) {
        int n_fact = 1, r_fact = 1, n_r_fact = 1;
        n_fact = factCal(n);
        r_fact = factCal(r);
        n_r_fact = factCal(n - r);
        int result = n_fact / (r_fact * n_r_fact);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(binomial_coefficient_cal(5, 2));// actual parameter
        sc.close();
    }
}