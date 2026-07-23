public class clear_last_i_bits {
    public static int clearLastBits(int number, int i) {
        int bitMask = ~0 << i;
        return number & bitMask;
    }

    public static void main(String[] args) {
        int number = 15;
        int i = 2;
        System.out.println(clearLastBits(number, i));
    }
}
