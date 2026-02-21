import java.util.*;

public class IfElse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        if (age >= 18) {
            System.out.println("You are adult");
        } else {
            System.out.println("You are not adult");

        }
        sc.close();
    }
}