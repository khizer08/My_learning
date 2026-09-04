import java.lang.reflect.Array;
import java.util.Arrays;

public class Array_Back_Track {

    public static void changeArr(int arr[], int i) {
        // base
        if (i == arr.length) {
            System.out.println(Arrays.toString(arr));
            return;
        }

        // recursion
        arr[i] = i + 1;
        changeArr(arr, i + 1);
        arr[i] = arr[i] - 2;
    }

    public static void main(String[] args) {
        int arr[] = new int[5];
        changeArr(arr, 0);
        System.out.println(Arrays.toString(arr));
    }
}