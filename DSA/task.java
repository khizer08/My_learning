import java.util.*;

public class task {

    public static void main(String[] args) {
        int arr[] = { 3, 4, -1, 3, 7, 99, -8 };
        int newArr[] = new int[2];
        int maxVal = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] > maxVal) {
                newArr[1] = maxVal; // old largest becomes second largest
                maxVal = arr[i];
                newArr[0] = maxVal; // new largest
            } else if (arr[i] > newArr[1]) {
                newArr[1] = arr[i];
            }
        }

        System.out.println("Second largest: " + newArr[1]);
    }
}