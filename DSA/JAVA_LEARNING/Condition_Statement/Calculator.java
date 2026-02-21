import java.util.*;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number1: ");
        int number1 = sc.nextInt();
        System.out.print("Enter the number2: ");
        int number2 = sc.nextInt();
        System.out.println("~~Welcome to basic calculator~~");
        System.out.print("1.Add\n2.Substract\n3.Multiply\n4.Divide\n5.Modulo\n");
        System.out.print("Enter the operation you want to perform: ");
        int choice = sc.nextInt();
        switch (choice) {
            case 1:
                int sum = number1 + number2;
                System.out.println("The sum of " + number1 + "and " + number2 + " is: " + sum);
                break;
            case 2:
                int sub = number1 - number2;
                System.out.println("The substraction of " + number1 + " and " + number2 + " is: " + sub);
                break;
            case 3:
                int mul = number1 * number2;
                System.out.println("The multiplication of " + number1 + "and " + number2 + " is: " + mul);
                break;
            case 4:
                int div = number1 / number2;
                System.out.println("The division of " + number1 + "and " + number2 + " is: " + div);
                break;
            case 5:
                int mod = number1 % number2;
                System.out.println("The modulo of " + number1 + "and " + number2 + " is: " + mod);
                break;

            default:
                System.out.println("Enter valid input!!");
                break;
        }
        sc.close();
    }
}