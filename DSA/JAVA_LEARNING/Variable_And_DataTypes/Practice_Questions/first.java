import java.util.*;
public class first{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number1: ");
        int number1=sc.nextInt();
        System.out.print("Enter number2: ");
        int number2=sc.nextInt();
        System.out.print("Enter number3: ");
        int number3=sc.nextInt();
        double sum=number1+number2+number3;
        double avg=sum/3;
        System.out.println("The average of "+sum+" is "+avg);
    }
}