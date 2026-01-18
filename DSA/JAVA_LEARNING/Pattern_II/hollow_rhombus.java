import java.util.*;

public class hollow_rhombus{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            if(i==1 || i==n){
                for(int j=1;j<=n;j++){
                    System.out.print("*");
                }
            }else{
                System.out.print("*");
                for(int j=1;j<=n-2;j++){
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