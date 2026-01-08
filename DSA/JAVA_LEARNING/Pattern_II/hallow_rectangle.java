import java.util.*;
public class hallow_rectangle {
    public static void main(String[] args) {
        int number,i,j;
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the value of number: ");
        number=sc.nextInt();
        for(i=1;i<=number;i++){
            for(j=1;j<=number+1;j++){
                if(i==1 || i==number || j==1 || j==number+1){// covering all the cases first.
                    System.out.print("*");
                }else{
                System.out.print(" ");
                }
            }
            System.out.println();
        }

        sc.close();
    }
}
