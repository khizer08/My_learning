public class clear_range_bits {

    public static int clearRangeBits(int number, int i, int j) {
        int a = ((~0) << (j + 1));
        int b = (1 << i) - 1;
        int bitMask = a | b;
        return number & bitMask;
    }

    public static void main(String[] args) {
        int number = 15;
        int j = 7;
        int i = 2;
        System.out.println(clearRangeBits(number, i, j));
    }
}
