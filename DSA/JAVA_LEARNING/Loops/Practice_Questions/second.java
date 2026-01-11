import java.util.*;
public class second{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int even=0,odd=0,number,check=0;
        do{
            System.out.print("Enter the number: ");
            number=sc.nextInt();
            
            if(number%2==0){
                even+=number;
            }else{
                odd+=number;
            }
            System.out.print("Enter 1 to contiue 0 to exit: ");
            check=sc.nextInt();
        }while(check==1);

        System.out.println("sum of odd numbers: "+odd);
        System.out.println("sum of even numbers: "+even);
        sc.close();
    }
}