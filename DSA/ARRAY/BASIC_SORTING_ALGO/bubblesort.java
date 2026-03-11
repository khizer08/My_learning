import java.util.Arrays;

public class bubblesort {
    public static void func(int nums[]) {
        int n = nums.length, temp = 0;
        for (int j = 0; j < n - 1; j++) {
            boolean swap = false;
            for (int i = 0; i < n - (j + 1); i++) { // each time one element is compared.

                if (nums[i] > nums[i + 1]) {// core logic (swap).
                    temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
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