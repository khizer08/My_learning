import java.util.*;

public class task {

    public static void main(String arg[]) {
        Scanner sc = new Scanner(System.in);
        int two_darr[][] = new int[3][3];
        int n = two_darr.length, m = two_darr[0].length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                two_darr[i][j] = sc.nextInt();
            }
        }

        System.out.println(Arrays.deepToString(two_darr));

    }
}
