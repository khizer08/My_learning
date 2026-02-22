public class subarray {

    public static void subarray_func(int number[]) {
        int ts = 0, sum = 0;// to calculate total subarrays and sum of each subarray.
        for (int i = 0; i < number.length; i++) {// logic behind this loop is to take "starting" element.
            for (int j = i; j < number.length; j++) {// logic behind this loop is to take "ending" element.
                System.out.print("[");
                for (int k = i; k <= j; k++) {// this loop is to print.
                    sum += number[k];
                    System.out.print(" " + number[k]);
                }
                ts++;
                System.out.print("]" + " " + "=" + sum);
                sum = 0;
            }
            System.out.println();
        }
        System.out.println("Total subarrays =" + ts);
    }

    public static void main(String[] args) {
        int number[] = { 2, 4, 6, 8, 10 };
        subarray_func(number);
    }
}

// output:-
// [ 2] [ 2 4] [ 2 4 6] [ 2 4 6 8] [ 2 4 6 8 10]
// [ 4] [ 4 6] [ 4 6 8] [ 4 6 8 10]
// [ 6] [ 6 8] [ 6 8 10]
// [ 8] [ 8 10]
// [ 10]
// Total subarrays =15