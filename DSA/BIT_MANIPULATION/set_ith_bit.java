public class set_ith_bit {

    public static int setIthBit(int number, int i) {
        int bitMask = 1 << i;
        return (number | bitMask);
    }

    public static void main(String[] args) {
        int number = 10;
        int i = 0;
        System.out.println(setIthBit(number, i));
    }
}
