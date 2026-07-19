import java.util.Arrays;

public class countingsort {

    public static void func(int nums[]) {

        int largest = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            largest = Math.max(largest, nums[i]);
        }

        int count[] = new int[largest + 1]; // +1 bcoz we need to go from 0 to that number(understand).
        for (int i = 0; i < nums.length; i++) {
            count[nums[i]]++;// count array acts as frequency array.
        }

        // sorting
        int j = 0;
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) { // it means number i appeared in the original array(very important).
                nums[j] = i;
                j++;
                count[i]--;
            }
        }
    }

    public static void main(String[] args) {
        int nums[] = { 1, 3, 1, 4, 6, 4, 6, 7 };
        func(nums);
        System.out.println(Arrays.toString(nums));
    }
}

// output:-
// [1, 1, 3, 4, 4, 6, 6, 7]