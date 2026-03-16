import java.util.Collections;
import java.util.Arrays;

public class task{
    public static void main(String[] args) {
        Integer arr[]={2,5,1,4,3};
        Arrays.sort(arr,Collections.reverseOrder());
        System.out.println(Arrays.toString(arr));
    }
}