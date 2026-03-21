import java.util.Arrays;

public class selectionsortpractice {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            int minpos = i;

            for (int j = i + 1; j < n; j++) {

                if (nums[minpos] < nums[j]) { // descending sorting
                    minpos = j;
                }
            }

            int temp = nums[minpos];
            nums[minpos] = nums[i];
            nums[i] = temp;
        }
    }

    public static void main(String[] args) {
        int nums[] = { 3, 6, 2, 1, 8, 7, 4, 5, 3, 1 };
        func(nums);
        System.out.println(Arrays.toString(nums));
    }
}

// output:-
// [8, 7, 6, 5, 4, 3, 3, 2, 1, 1]