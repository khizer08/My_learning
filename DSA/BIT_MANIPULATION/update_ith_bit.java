public class update_ith_bit {
    public static int clearIthBit(int number, int i) {
        int bitMask = ~(1 << i);
        return (number & bitMask);
    }

    public static int setIthBit(int number, int i) {
        int bitMask = 1;
        return (number | bitMask << i);
    }

    public static int updateIthBit(int number, int i, int newBit) {

        if (newBit == 0) {
            return clearIthBit(number, i);
        } else {
            return setIthBit(number, i);
        }
    }

    public static void main(String args[]) {
        int number = 10;
        int i = 3;
        int newBit = 0;
        System.out.println(updateIthBit(number, i, newBit));
    }

}
