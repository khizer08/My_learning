import java.util.*;
public class Prime_No {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number to check prime or not: ");
        int number=sc.nextInt();
        boolean isPrime=true;// assuming it to be PRIME NUMBER.
        if(number<=1){ // as we know "0,1" are not a prime number
            isPrime=false;
        }else{
            for(int i=2;i<=Math.sqrt(number);i++){// to optimize the loop , as if we compare till sqrt(number) we already visited all the factors of that number, no need further.
                if(number%i==0){
                    isPrime=false;
                    break;
                }
            }
        }
        if(isPrime==true){
            System.out.println("Number is Prime");
        }else{
            System.out.println("Not a Prime Number");
        }
        sc.close();
    }
}