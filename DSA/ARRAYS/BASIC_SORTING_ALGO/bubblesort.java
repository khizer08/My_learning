import java.util.Arrays;

public class bubblesort {
    public static void func(int nums[]) {
        int n = nums.length, temp = 0;
        for (int i = 0; i < n - 1; i++) {
            boolean swap = false;
            for (int j = 0; j < n - (i + 1); j++) { // each time one element is compared.

                if (nums[j] > nums[j + 1]) {// core logic (swap).
                    temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                    swap = true;
                }
            }

            if (!swap) {// if array is already sorted and no swapping accured in first iteration it
                        // means the array is sorted and breaks out of loop and returns the array.
                break;
            }
        }
        System.out.println(Arrays.toString(nums));

    }

    public static void main(String[] args) {
        int nums[] = { 1, 5, 2, 3, 4 };
        func(nums);
    }

}

// output:-
// [1, 2, 3, 4, 5]