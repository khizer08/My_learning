import java.util.*;
public class fact_func{
    public static int fact(int n){
        int fact=1;
        for(int i=1;i<=n;i++){
            fact=fact*i;// factorize main concept
        }
        return fact;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int result=fact(10);
        System.out.println(result);
        sc.close();
    }
}