public class SortedOrNot {

    public static boolean SortedOrNotFunc(int nums[], int i) {

        if (i == nums.length - 1) { // base condition
            return true;
        }
        if (nums[i] > nums[i + 1]) {
            return false;
        }
        return SortedOrNotFunc(nums, i + 1);
    }

    public static void main(String[] args) {
        int nums[] = { 1, 2, 3, 4, 5, 2 };
        System.out.println(SortedOrNotFunc(nums, 0));
    }
}
