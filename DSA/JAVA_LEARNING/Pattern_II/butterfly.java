import java.util.*;

public class butterfly{
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n=sc.nextInt();

        // number of lines
        for(int i=1;i<=n;i++){

            //1st half
            //stars=i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            //spaces=n+4-2
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }

            //stars=i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        // number of lines
        for(int i=n;i>=1;i--){

            //2nd half
            //stars=i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            //spaces=n+4-2
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }

            //stars=i
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }


        sc.close();
    }
}

// output:-
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *