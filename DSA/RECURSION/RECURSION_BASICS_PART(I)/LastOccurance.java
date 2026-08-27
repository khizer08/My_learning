public class LastOccurance {

    public static int LastOccuranceFunc(int nums[], int key, int i) {
        if (i == -1) { // base case
            return -1;
        }
        if (key == nums[i]) {
            return i;
        }
        return LastOccuranceFunc(nums, key, i - 1);
    }

    public static void main(String[] args) {
        int nums[] = { 8, 3, 6, 9, 5, 10, 2, 5, 3 };
        int key = 3;
        System.out.println(LastOccuranceFunc(nums, key, nums.length - 1));
    }

}
