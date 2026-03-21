import java.util.Arrays;

public class countingsortpractice {

    public static void func(int nums[]) {
        int n = nums.length;
        int largest = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            largest = Math.max(largest, nums[i]);
        }

        int count[] = new int[largest + 1];
        for (int i = 0; i < n; i++) {
            count[nums[i]]++;
        }

        int j = 0;

        // descending sorting logic (this whole block).
        for (int i = count.length - 1; i >= 0; i--) {
            while (count[i] > 0) {
                nums[j++] = i;
                count[i]--;
            }
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