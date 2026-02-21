import java.util.*;

public class Ternary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the marks: ");
        int marks = sc.nextInt();
        String result = marks >= 33 ? "Pass" : "Fail";
        System.out.println(result);
        sc.close();
    }
}