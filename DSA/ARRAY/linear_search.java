import java.util.*;
public class linear_search{

    public static int linear_search_fun(int n){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the size of array: ");
        int arr_size=sc.nextInt();
        int number[]=new int[arr_size];
        for(int i=0;i<number.length;i++){
            System.out.print("Enter the element "+(i+1)+": ");
            number[i]=sc.nextInt();
        }
        System.out.print("Array elements are: ");
        for(int i=0;i<number.length;i++){
            System.out.print(number[i]+" ");
        }
        System.out.println();

        // core logic:-
        for(int i=0;i<number.length;i++){
            if(number[i]==n){
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
       int func_result=linear_search_fun(12);
        if(func_result==-1){
            System.out.print("Element does not exist!!");
        }else{
            System.out.print("Element found at index "+func_result);
        }

    }
}