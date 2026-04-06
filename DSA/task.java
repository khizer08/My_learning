import java.util.Collections;
import java.util.Arrays;

public class task{
    public static void main(String[] args) {
        Integer arr[]={2,5,1,4,3};
        Arrays.sort(arr,Collections.reverseOrder()); // built in functions
        System.out.println(Arrays.toString(arr)); // one d array printing
    }
}