public class bubblesortpractice {

    public static int func(int nums[]) {
        int n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n - (i + 1); j++) {
                if (nums[i] > nums[j]) {
                    int temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                }
            }
        }
    }
git add .
    public static void main(String[] args) {
        int nums[] = { 3, 6, 2, 1, 8, 7, 4, 5, 3, 1 };
        func(nums);
        System.out.println(nums);
    }
}

// output:-
