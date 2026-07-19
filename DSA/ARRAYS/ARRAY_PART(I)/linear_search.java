import java.util.*;

public class linear_search {

    public static int linear_search_fun(int numbers[], int key) {
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        int numbers[] = { 10, 12, 14, 16, 18, 20 };
        int key = 169;
        int index = linear_search_fun(numbers, key);
        if (index == -1) {
            System.out.println("Key not found");
        } else {
            System.out.println("Key found at index: " + index);
        }

    }
}