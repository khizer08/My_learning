import java.util.Arrays;
import java.util.Scanner;

public class task {
    public static int compress(char chars[]) {
        StringBuilder sb = new StringBuilder("");
        for (int i = 0; i < chars.length; i++) {
            Integer count = 1;
            while (i < chars.length - 1 && chars[i] == chars[i + 1]) {
                count++;
                i++;
            }
            sb.append(chars[i]);
            if (count > 1) {
                sb.append(count.toString());
            }

        }
        String output = sb.toString();
        char[] arr = output.toCharArray();

        for (int i = 0; i < arr.length; i++) {
            chars[i] = arr[i];
        }

        return arr.length;
    }

    public static void main(String[] args) {
        char chars[] = { 'a', 'a', 'b', 'b', 'c' };
        System.out.println(compress(chars));
    }
}
