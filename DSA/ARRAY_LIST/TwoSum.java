import java.util.Arrays;

public class TwoSum {

    public static int[] twoSum(int numbers[], int target) {
        int newArr[] = new int[2];
        int lp = 0;
        int rp = numbers.length - 1;
        while (lp < rp) {
            if (numbers[lp] + numbers[rp] > target) {
                rp--;
            } else if (numbers[lp] + numbers[rp] < target) {
                lp++;
            } else if (numbers[lp] + numbers[rp] == target) {
                newArr[0] = lp + 1;
                newArr[1] = rp + 1;
                return newArr;
            }
        }

        return newArr;
    }

    public static void main(String[] args) {
        int numbers[] = { 2, 7, 11, 15 };
        int target = 9;
        int result[] = twoSum(numbers, target);
        System.out.println(Arrays.toString(result));

    }
}