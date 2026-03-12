import java.util.Arrays;

public class insertionsort {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            int curr = nums[i];
            int prev = i - 1;

            //finding out the correct pos to insert
            while (prev >= 0 && nums[prev] > curr) {
                nums[prev + 1] = nums[prev];
                prev--;
            }
            //insertion
            nums[prev + 1] = curr;
        }

    }

    public static void main(String[] args) {
        int nums[] = { 1, 3, 5, 2, 4 };
        func(nums);
        System.out.println(Arrays.toString(nums));
    }
}
