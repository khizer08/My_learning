import java.util.*;

public class task {
    public static void main(String arg[]) {
        Scanner sc = new Scanner(System.in);
        do {
            int number = sc.nextInt();
            if (number % 10 == 0) {
                continue;
            } else {

                System.out.println(number);
            }

        } while (true);
    }
}
