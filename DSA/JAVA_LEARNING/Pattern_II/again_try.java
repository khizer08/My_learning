import java.util.*;

public class again_try{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int i,j,num=1,store_num=0;
        for(i=1;i<=n;i++){
            if(i%2!=0){
                for(j=1;j<=i;j++){
                    store_num=(store_num*10)+num;
                    num++;
                }
                int reverse_num=store_num;
                while(reverse_num>0){
                    System.out.print(reverse_num%10+" ");
                    reverse_num=reverse_num/10;
                }
                store_num=0;
            }
            else{
                for(j=1;j<=i;j++){
                    System.out.print(num+" ");
                    num++;
                }
            }
            System.out.println();
        }
        sc.close();
    }
}