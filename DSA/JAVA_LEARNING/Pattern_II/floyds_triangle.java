import java.util.*;

public class floyds_triangle {
    public static void main(String[] args) {
        int k = 1;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(k + " ");
                k++;
            }
            System.out.println();
        }
        sc.close();
    }
}

// output:-
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15