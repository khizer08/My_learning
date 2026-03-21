import java.util.Arrays;

public class insertionsortpractice {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            int curr = nums[i];
            int prev = i - 1;

            while (prev >= 0 && nums[prev] < curr) { // "nums[prev] < curr" descending sorting
                nums[prev + 1] = nums[prev];
                prev--;
            }

            nums[prev + 1] = curr;

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