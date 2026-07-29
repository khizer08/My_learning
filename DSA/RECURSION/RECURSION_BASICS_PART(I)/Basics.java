public class Basics {
    public static void decreasingOrder(int nums) {
        if (nums == 1) {
            System.out.println(nums);
            return;
        }
        System.out.print(nums + " ");
        decreasingOrder(nums - 1);

    }

    public static void increasingOrder(int nums) {
        if (nums == 1) {
            System.out.print(nums + " ");
            return;
        }
        increasingOrder(nums - 1);
        System.out.println(nums + " ");

    }

    public static void main(String args[]) {
        int nums = 10;
        decreasingOrder(nums);
        increasingOrder(nums);
    }

}
