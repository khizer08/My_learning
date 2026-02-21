import java.util.*;

public class hollow_rhombus {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();

        // number of lines
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= n - i; j++) {// starting spaces logic
                System.out.print(" ");
            }

            if (i == 1 || i == n) {// first and last line logic
                for (int j = 1; j <= n; j++) {
                    System.out.print("*");
                }
            } else {
                System.out.print("*");
                for (int j = 1; j <= n - 2; j++) {// center spaces logic
                    System.out.print(" ");
                }
                System.out.print("*");
            }
            System.out.println();
        }

        sc.close();
    }
}

// output:-
//     *****
//    *   *
//   *   *
//  *   *
// *****