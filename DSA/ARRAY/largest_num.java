public class largest_num {
    public static int getLargest(int number[]) {
        int largest = Integer.MIN_VALUE; // (-)infinity.
        for (int i = 0; i < number.length; i++) {
            if (number[i] > largest) {
                largest = number[i];
            }

        }
        return largest;
    }

    public static void main(String[] args) {
        int number[] = { 32, 67, 45, 44, 12, 88, 22 };
        System.out.print("Largest number is: " + getLargest(number));
    }
}