public class BinaryStrings {

    public static void BinaryStringsFunc(int n, int lastPlace, String str) {

        // base case
        if (n == 0) {
            System.out.println(str);
            return;
        }

        if (lastPlace == 0) {
            // sit 0 on chair n
            BinaryStringsFunc(n - 1, 0, str + "0");

            BinaryStringsFunc(n - 1, 1, str + "1");
        } else {
            BinaryStringsFunc(n - 1, 0, str + "0");
        }
    }

    public static void main(String[] args) {
        BinaryStringsFunc(3, 0, "");
    }
}
