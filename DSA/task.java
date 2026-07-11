public class task {
    public static void main(String arg[]) {
        int number = 10988;
        int last_digit;
        int reverse_number=0;
        while (number>0) {
            last_digit = number % 10;
            reverse_number=last_digit+reverse_number*10;
            number=number/10;
        }
        System.out.println(reverse_number);
    }
}
