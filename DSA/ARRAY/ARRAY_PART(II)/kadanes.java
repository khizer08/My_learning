public class kadanes {
    public static void func(int number[]) {
        int currSum = 0, maxSum = Integer.MIN_VALUE;
        for (int i = 0; i < number.length; i++) {
            currSum += number[i];
            if (currSum < 0) {
                currSum = 0;
            }
            maxSum = Math.max(currSum, maxSum); // core logic
        }
        System.out.println("maximum Sum= " + maxSum);
    }

    public static void main(String[] args) {
        int number[] = { 1, 2, 3, 4, 5 };
        func(number);
    }
}

// output:-
// maximum Sum= 15

// #NOTE:- For special case where all the elements of the array is negative run
// a loop and find the min negative number and store it as "maxSum".