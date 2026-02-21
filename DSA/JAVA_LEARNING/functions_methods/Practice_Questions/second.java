import java.util.Scanner;

public class second {
    // Write a Java program to check if a number is a palindrome ( 121 is a
    // palindrome, 321 is not)
    public static int isPalindrome(int number) {
        int reverse = 0, lastDigit = 0;
        while (number > 0) {
            lastDigit = number % 10;
            reverse = lastDigit + (reverse * 10);
            number = number / 10;
        }
        return reverse;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = sc.nextInt();
        int result = isPalindrome(number);
        if (number == result) {
            System.out.print("Its a palindrome");
        } else {
            System.out.print("Not a palindrome");
        }
        sc.close();

    }
}