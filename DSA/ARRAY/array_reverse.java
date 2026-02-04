import java.util.Arrays;

public class array_reverse{

    // here we are using extra array , which means extra space , and space complexity will be O(n).
    public static int[] array_reverse_func(int number[]){ // as we are returning an array we need to use "int[]"" as the "return type".
        int j=-1;
        int number2[]=new int[number.length];
        for(int i=number.length-1;i>=0;i--){
            j++;
            number2[j]=number[i];
        }
        return number2;
    }
    public static void main(String[] args) {
        int number[]={12,34,56,78,33,11,56};
        System.out.print(Arrays.toString(array_reverse_func(number)));// "Arrays.toString" is used because java doesnt know the content it will print the "references".
    }
}