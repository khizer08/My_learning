public class diagonal_sum {
    public static int diagonal_sum_func(int arr[][]) {
        int n = arr.length, m = arr[0].length;
        int sum = 0;

        // Brute force approach
        // if (n == m) {
        // for (int i = 0; i < n; i++) {
        // for (int j = 0; j < m; j++) {
        // if (i == j) {
        // sum += arr[i][j];
        // }
        // if (i + j == n - 1 && i != j) {
        // sum += arr[i][j];
        // }
        // }
        // }
        // }
        // return sum;


        // Optimal approach
        // primary diagonal
        for (int i = 0; i < n; i++) {
            sum += arr[i][i];

            // secondary diagonal
            if (i != n - i - 1) {
                sum += arr[i][n - i - 1];
            }

        }

        return sum;
    }

    public static void main(String[] args) {
        int arr[][] = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };
        System.out.print(diagonal_sum_func(arr));
    }
}
