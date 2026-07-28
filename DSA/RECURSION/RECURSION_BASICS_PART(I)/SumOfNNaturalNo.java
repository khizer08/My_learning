public class SumOfNNaturalNo {

    public static int SumOfNNaturalNoFunc(int nums) {
        if (nums == 1) {
            return 1;
        }
        return nums + SumOfNNaturalNoFunc(nums - 1);
    }

    public static void main(String[] args) {
        int nums = 5;
        System.out.println(SumOfNNaturalNoFunc(nums));
    }
}
