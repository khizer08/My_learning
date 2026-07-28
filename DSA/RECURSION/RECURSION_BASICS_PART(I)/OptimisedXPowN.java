public class OptimisedXPowN {

    public static int OptimisedXPowNFunc(int a, int n) {

        if (n == 0) {
            return 1;
        }


        int halfPower=OptimisedXPowNFunc(a, n / 2);
        int halfPowerSq =  halfPower * halfPower;

        // if n is odd
        if (n % 2 != 0) {
            halfPowerSq = a * halfPowerSq;
        }

        return halfPowerSq;
    }

    public static void main(String[] args) {
        int a = 2;
        int n = 10;

        System.out.println(OptimisedXPowNFunc(a, n));
    }
}
