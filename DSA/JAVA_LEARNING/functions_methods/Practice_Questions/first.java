import java.util.*;

// Write a Java method to compute the sum of the digits in an integer.
public class first {

    public static int sumOfDigit(int number) {
        int sum = 0, lastDigit = 0;
        while (number > 0) {
            lastDigit = number % 10;
            sum = sum + lastDigit;
            number = number / 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = sc.nextInt();
        System.out.println(sumOfDigit(number));
        sc.close();
    }

}