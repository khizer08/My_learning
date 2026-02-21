import java.util.*;

public class Do_While {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i = 1;
        do {
            System.out.println(i);
            i++;
        } while (i <= 5);

        sc.close();
    }
}