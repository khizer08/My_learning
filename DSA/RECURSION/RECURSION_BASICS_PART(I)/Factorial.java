public class Factorial {

    public static int factorialFunc(int nums) {
        if (nums == 0) {
            return 1;
        }
        return nums * factorialFunc(nums - 1);
    }

    public static void main(String[] args) {
        int nums = 5;
        System.out.println(factorialFunc(nums));
    }
}
