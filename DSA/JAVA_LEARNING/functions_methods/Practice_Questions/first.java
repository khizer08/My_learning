import java.util.*;
public class first {

    public static boolean isEven(int number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }      
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number=sc.nextInt();
        System.out.println(isEven(number));
        sc.close();
    }
    
}