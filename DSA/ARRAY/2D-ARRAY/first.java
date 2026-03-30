import java.util.Arrays;
import java.util.Scanner;

public class first {

    public static void inputPrintCheck() {
        int n, m;
        int smallest = Integer.MAX_VALUE;
        int largest = Integer.MIN_VALUE;

        // array size input logic .
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        n = sc.nextInt();
        System.out.print("Enter the number of columns: ");
        m = sc.nextInt();

        // array elements input logic .
        int arr[][] = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        // array elements print logic .
        System.out.println(Arrays.deepToString(arr));

        // finding largest and smallest number logic .
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                smallest = Math.min(smallest, arr[i][j]);
                largest = Math.max(largest, arr[i][j]);
            }
        }
        System.out.println("Smallest element of the array: " + smallest);
        System.out.println("Largest element of the array: " + largest);
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