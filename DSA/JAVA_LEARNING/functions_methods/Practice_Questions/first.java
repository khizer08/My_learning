import java.util.*;
public class first {

    public static void avg(){
        Scanner sc=new Scanner(System.in);
        int num1,num2,num3,avg;
        System.out.print("Enter number 1: ");
        num1=sc.nextInt();
        System.out.print("Enter number 2: ");
        num2=sc.nextInt();
        System.out.print("Enter number 3: ");
        num3=sc.nextInt();
        avg=(num1+num2+num3)/3;
        System.out.print("The average of "+num1+" "+num2+" "+num3+ " is: "+avg);
        sc.close();
    }

    public static void main(String[] args) {
        avg();
    }
    
}