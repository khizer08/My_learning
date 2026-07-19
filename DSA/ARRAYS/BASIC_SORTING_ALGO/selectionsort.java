import java.util.Arrays;

public class selectionsort {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            int minPos = i;

            for (int j = i + 1; j < n; j++) {
                if (nums[minPos] > nums[j]) {
                    minPos = j;
                }
            }

            int temp = nums[minPos];
            nums[minPos] = nums[i];
            nums[i] = temp;
        }

    }

    public static void main(String[] args) {
        int nums[] = { 1, 5, 2, 4, 3 };
        func(nums);
        System.out.println(Arrays.toString(nums));
    }
}

// output:-
// [1, 2, 3, 4, 5]