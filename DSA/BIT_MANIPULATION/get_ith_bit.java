public class get_ith_bit {

    public static int getIthBit(int number, int i) {
        int bitMask = 1 << i;
        if ((number & bitMask) == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    public static void main(String args[]) {
        int number = 10;
        int i = 1;
        System.out.println(getIthBit(number, i));
    }
}