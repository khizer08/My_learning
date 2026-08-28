public class BinaryStrings {

    public static void BinaryStringsFunc(int n, int lastPlace, String str) {

        // base case
        if (n == 0) {
            System.out.println(str);
            return;
        }

        BinaryStringsFunc(n - 1, 0, str + "0");

        if (lastPlace == 0) {
            BinaryStringsFunc(n - 1, 1, str + "1");
        }
    }

    public static void main(String[] args) {
        BinaryStringsFunc(4, 0, "");
    }
}
