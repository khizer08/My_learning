public class prefixminmaxsubarray {

    public static void func(int number[]) {
        int currSum = 0;
        int maxSum = Integer.MIN_VALUE;
        int prefix[] = new int[number.length];

        prefix[0] = number[0];

        for (int i = 1; i < prefix.length; i++) {
            prefix[i] = prefix[i - 1] + number[i];
        }

        for (int i = 0; i < number.length; i++) {
            int start = i;
            for (int j = i; j < number.length; j++) {
                int end = j;

                currSum = start == 0 ? prefix[end] : prefix[end] - prefix[start - 1]; // core logic.

                if (maxSum < currSum) {
                    maxSum = currSum;
                }

            }
        }
        System.out.println("max sum= " + maxSum);
    }

    public static void main(String[] args) {
        int number[] = { 1, 2, 3, 4, 5 };
        func(number);
    }
}
