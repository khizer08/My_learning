public class clear_ith_bit {

    public static int clearIthBit(int number, int i) {
        int bitMask = ~(1 << i);
        return (number & bitMask);
    }

    public static void main(String[] args) {
        int number = 10;
        int i = 1;
        System.out.println(clearIthBit(number, i));
    }
}
