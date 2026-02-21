import java.util.*;

public class for_reverse_no {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value of number: ");
        int number = sc.nextInt();
        while (number > 0) {
            int lastDigit = number % 10;
            System.out.print(lastDigit);
            number = number / 10;
        }
        sc.close();
    }
}