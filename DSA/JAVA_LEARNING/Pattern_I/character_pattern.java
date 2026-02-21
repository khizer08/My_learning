import java.util.*;

class character_pattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number;
        char ch = 'A';
        System.out.print("Enter the value number: ");
        number = sc.nextInt();
        for (int i = 1; i <= number; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(ch);
                ch++;
            }
            System.out.println();
        }
        sc.close();
    }
}

// output:-
// A
// BC
// DEF
// GHIJ
// KLMNO