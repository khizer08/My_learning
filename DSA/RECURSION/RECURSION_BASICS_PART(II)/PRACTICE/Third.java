public class Third {

    public static int CalStringLength(String str) {

        if (str.length() == 0) {
            return 0;
        }

        return CalStringLength(str.substring(1)) + 1;
    }

    public static void main(String[] args) {

        String str = "Syed Khizer";

        System.out.println(CalStringLength(str));
    }
}