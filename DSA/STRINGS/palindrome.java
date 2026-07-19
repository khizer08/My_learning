import java.util.*;

public class palindrome {

    public static boolean palindromeCheck(String str) {
        for (int i = 0; i < str.length() / 2; i++) {
            if (str.charAt(i) == str.charAt(str.length() - i - 1)) {
                continue;
            } else {
                return false;
            }
        }
        return true;

    }

    public static void main(String[] args) {
        String str = "racecar";
        boolean result = palindromeCheck(str);
        if (result == true) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a palindrome");
        }
    }
}
