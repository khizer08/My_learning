import java.util.Arrays;

public class anagram_check {
    public static boolean isAnagram(String s, String t) {
        s = s.toLowerCase();
        t = t.toLowerCase();

        if (s.length() == t.length()) {
            char sChar[] = s.toCharArray();
            char tChar[] = t.toCharArray();

            Arrays.sort(sChar);
            Arrays.sort(tChar);

            boolean result = Arrays.equals(sChar, tChar);
            if (result) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        String s = "race";
        String t = "care";
        System.out.println(isAnagram(s, t));
    }
}
