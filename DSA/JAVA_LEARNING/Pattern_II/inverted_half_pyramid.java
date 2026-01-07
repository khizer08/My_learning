import java.util.*;
public class inverted_half_pyramid{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int number,i,j;
        System.out.print("Enter the value of number: ");
        number=sc.nextInt();
        for(i=1;i<=number;i++){
            for(j=1;j<=number-i;j++){
                System.out.print(" ");
            }
            for(j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        sc.close();
    }
}