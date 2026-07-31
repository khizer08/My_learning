public class test {
    public static void ReverseString(char[] s) {
        int first = 0;
        int last = s.length - 1;
        while (first < last) {
            char temp = s[first];
            s[first] = s[last];
            s[last] = temp;
            first++;
            last--;
        }
        System.out.println(s);
    }

    public static void main(String args[]) {
        char[] s = { 'h', 'e', 'l', 'l', 'o' };
        ReverseString(s);
    }
}