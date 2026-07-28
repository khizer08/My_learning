public class FirstOccurance {

    public static int FirstOccuranceFunc(int nums[], int key, int i) {
        if (i == nums.length) { // base case
            return -1;
        }
        if (key == nums[i]) {
            return i;
        }
        return FirstOccuranceFunc(nums, key, i + 1);
    }

    public static void main(String[] args) {
        int nums[] = { 8, 3, 6, 9, 5, 10, 2, 5, 3 };
        int key = 11;
        System.out.println(FirstOccuranceFunc(nums, key, 0));
    }
}
