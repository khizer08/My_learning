import java.util.*;
public class star{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int i,j,number;
        System.out.print("Enter the value of number: ");
        number=sc.nextInt();
        for(i=1;i<=number;i++){
            for(j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}

// output:-
// *
// **
// ***
// ****
// *****