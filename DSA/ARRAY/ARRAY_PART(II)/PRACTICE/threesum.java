public class threesum {

    public static void func(int nums[]) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
                        System.out.println(nums[i] + " " + nums[j] + " " + nums[k]);
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        int nums[] = { -1, 0, 1, 2, -1, 4 };
        func(nums);
    }
}

// NOTE:- THIS PROBLEM WILL BE DONE BY HASHSETS. lets pause it here and comeback again.