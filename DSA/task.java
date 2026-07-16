import java.util.*;

public class task {

    public static int trapped_water(int arr[]) {
        int left_max[] = new int[arr.length];
        left_max[0] = arr[0];
        for (int i = 1; i < left_max.length; i++) {
            left_max[i] = Math.max(left_max[i - 1], arr[i]);
        }

        int right_max[] = new int[arr.length];
        right_max[arr.length - 1] = arr[arr.length - 1];
        for (int i = arr.length - 2; i >= 0; i--) {
            right_max[i] = Math.max(right_max[i + 1], arr[i]);
        }

        int trapped_water = 0;
        for (int i = 0; i < arr.length; i++) {
            int water_level = Math.min(left_max[i], right_max[i]);

            trapped_water += water_level - arr[i];
        }
        return trapped_water;
    }

    public static void main(String arg[]) {
        int arr[] = { 4, 2, 0, 6, 3, 2, 5 };

        System.out.println(trapped_water(arr));

    }
}
