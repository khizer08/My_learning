import java.util.*;
public class inverted_half_pyramid{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int number;
        System.out.println("enter the number: ");
        number=sc.nextInt();
        for(int i=1;i<=number;i++){
            for(int j=1;j<=number-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        sc.close();
    }
}