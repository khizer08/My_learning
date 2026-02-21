import java.util.*;

public class diamond {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();

        // first half
        // number of lines
        for (int i = 1; i <= n; i++) {
            // starting spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // number of stars
            for (int j = 1; j <= (2 * i) - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // second half
        for (int i = n; i >= 1; i--) {

            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }

            for (int j = 1; j <= (2 * i) - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}

// output:-
//    *
//   ***
//  *****
// *******
// *******
//  *****
//   ***
//    *