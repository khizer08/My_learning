import java.util.*;

public class task {

    public static void reverse_arr(int arr[]) {
        int size = arr.length;
        int last = size - 1;
        int first = 0;
        while (first < last) {
            int temp = arr[last];
            arr[last] = arr[first];
            arr[first] = temp;
            last--;
            first++;
        }
    }

    public static void main(String arg[]) {
        int arr[] = { 2, 4, 6, 8, 10 };

        reverse_arr(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

    }
}
