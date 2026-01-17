import java.util.*;

public class z_pattern {// try again
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter the number: ");
        int n = sc.nextInt();
        for(int i=1;i<=n;i++) {
            System.out.print("*");// first line logic
        }
        System.out.println();

        for(int i=1;i<n-1;i++) {
            for(int j=1;j<n-i;j++) {
                System.out.print(" ");// center logic 
            }
            System.out.println("*");
        }

        for(int i=1;i<=n;i++) {
            System.out.print("*");// last line logic
        }
        sc.close();
    }
}

// output:-
// *****
//    *
//   *
//  *
// *****