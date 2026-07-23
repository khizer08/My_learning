public class count_set_bits {

    public static int CountSetBits(int number) {
        int bitMask = 1;
        int count = 0;
        while (number > 0) {
            if ((number & bitMask) == 1) {
                count++;
            }
            number = number >> 1;

        }
        return count;
    }

    public static void main(String[] args) {
        int number = 10;
        System.out.println(CountSetBits(number));
    }
}
