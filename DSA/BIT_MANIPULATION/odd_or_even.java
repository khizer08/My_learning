public class odd_or_even {

    public static void oddEvenFunc(int n) {
        int bitMask = 1;
        if ((n & bitMask) == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }

    public static void main(String[] args) {
        oddEvenFunc(12);
        oddEvenFunc(13);
        oddEvenFunc(1);
    }
}
