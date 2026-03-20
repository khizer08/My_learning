import java.util.Arrays;

public class bubblesortpractice {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - (i + 1); j++) {

                if (nums[j] < nums[j + 1]) { // descending sorting 
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
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
