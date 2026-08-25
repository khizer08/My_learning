import java.lang.reflect.Array;
import java.util.Arrays;

public class Array_Back_Track {

    public static void changeArr(int arr[], int i, int val) {
        // base
        if (i == arr.length) {
            System.out.println(Arrays.toString(arr));
            return;
        }

        // recursion
        arr[i] = val;
        changeArr(arr, i + 1, val + 1);
        arr[i] = arr[i] - 2;
    }

    public static void main(String[] args) {
        int arr[] = new int[5];
        changeArr(arr, 0, 1);
        System.out.println(Arrays.toString(arr));
    }
}