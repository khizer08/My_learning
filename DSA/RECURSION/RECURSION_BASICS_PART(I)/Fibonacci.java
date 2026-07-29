public class Fibonacci {

    public static int FibonacciFunc(int num) {
        if (num == 0 || num == 1) {
            return num;
        }
        // int fib_nm_1 = FibonacciFunc(num - 1);
        // int fib_nm_2 = FibonacciFunc(num - 2);
        // int fib = fib_nm_1 + fib_nm_2;
        // return fib;

        return FibonacciFunc(num - 1) + FibonacciFunc(num - 2);
    }

    public static void main(String[] args) {
        int num = 5; // 5th Fibonacci number.
        System.out.println(FibonacciFunc(num));
    }
}
