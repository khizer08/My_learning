public class fast_expo {

    public static int fastExponential(int number, int pow) {
        int ans = 1;
        while (pow > 0) {
            if ((pow & 1) == 1) {
                ans = ans * number;
            }
            number = number * number;
            pow = pow >> 1;
        }
        return ans;
    }

    public static void main(String[] args) {
        int number = 5;
        int pow = 3;
        System.out.println(fastExponential(number, pow));
    }
}
