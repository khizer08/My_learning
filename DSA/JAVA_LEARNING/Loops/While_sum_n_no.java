import java.util.*;
public class While_sum_n_no{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the value of n: ");
        int n=sc.nextInt();
        int count=1;
        int sum=0;
        while(count<=n){
            sum+=count;
            count++;
        }
        System.out.println("sum of 1 to "+n+" is: "+sum);
    }
}