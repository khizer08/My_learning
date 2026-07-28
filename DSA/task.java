import java.util.*;

public class task {

    public static void recursion(int nums) {
        if (nums == 1) {
            System.out.println(nums);
            return;
        }
        System.out.println(nums + " ");
        recursion(nums - 1);

    }

    public static void main(String args[]) {
        int nums = 10;
        recursion(nums);
    }
}
