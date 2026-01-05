import java.util.Scanner;

public class for_reverse_no {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number: ");
        int n = sc.nextInt();

        for (int i = n; i >= 1; i--) {
            System.out.println(i);
        }
        sc.close();
    }
}
