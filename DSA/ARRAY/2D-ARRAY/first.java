import java.util.Arrays;
import java.util.Scanner;

public class first {

    public static void inputPrintCheck() {
        int m, n;
        int smallest = Integer.MAX_VALUE;
        int largest = Integer.MIN_VALUE;

        // array size input logic.
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        m = sc.nextInt();
        System.out.print("Enter the number of columns: ");
        n = sc.nextInt();

        // elements input.
        int arr[][] = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        // elements print.
        System.out.println(Arrays.deepToString(arr));

        // finding largest and smallest number.
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                smallest = Math.min(smallest, arr[i][j]);
                largest = Math.max(largest, arr[i][j]);
            }
        }
        System.out.println("Smallest element: " + smallest);
        System.out.println("Largest element: " + largest);
        sc.close();
    }

    public static void main(String[] args) {
        inputPrintCheck();
    }
}

// output:-
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Smallest element: 1
// Largest element: 12