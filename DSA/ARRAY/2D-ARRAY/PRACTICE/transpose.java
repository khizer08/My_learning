import java.util.*;

public class transpose {

    public static void transposeFunc(int arr[][]) {
        int rows = arr.length;
        int cols = arr[0].length;
        int arr2[][] = new int[cols][rows];
        for (int i = 0; i < cols; i++) {
            for (int j = 0; j < rows; j++) {
                arr2[i][j] = arr[j][i];
            }
        }

        System.out.println(Arrays.deepToString(arr2));
    }

    public static void main(String[] args) {
        int arr[][] = { { 1, 11, 2 },
                { 4, 4, 2 } };

        transposeFunc(arr);
    }
}
