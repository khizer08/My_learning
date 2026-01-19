import java.util.*;

public class basic_input{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the size of array: ");
        int n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<a.length;i++){
            System.out.print("Enter the element "+(i+1)+": ");
            a[i]=sc.nextInt();
        }
        System.out.print("Elements are: ");
        for(int i=0;i<a.length;i++){
            System.out.print(a[i]+" ");
        }



        sc.close();
    }
}