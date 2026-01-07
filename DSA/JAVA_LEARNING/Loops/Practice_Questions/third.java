import java.util.*;
public class third{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number,fact=1,i;
        System.out.print("Enter the number: ");
        number=sc.nextInt();
        for(i=1;i<=number;i++){
            fact*=i;
        }
        System.out.println("The factorial of "+number+" is: "+fact);

        sc.close();
    }
}