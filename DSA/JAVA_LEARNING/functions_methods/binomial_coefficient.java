import java.util.*;
public class binomial_coefficient{

    public static int binomial_coefficient_cal(int n,int r){
        int n_fact=1,r_fact=1,n_r_fact=1;
        for(int i=1;i<=n;i++){
            n_fact*=i;
        }
        for(int i=1;i<=r;i++){
            r_fact*=i;
        }
        int n_r=n-r;
        for(int i=1;i<=n_r;i++){
            n_r_fact*=i;
        }
        int result=n_fact/(r_fact*n_r_fact);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println(binomial_coefficient_cal(5,2));// actual parameter
        sc.close();
    }
}