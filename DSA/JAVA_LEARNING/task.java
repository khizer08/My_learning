import java.util.*;
public class task{
    public static void main (String args[]) {
    Scanner sc = new Scanner(System.in);
    int input = sc.nextInt();
    
    boolean isPrime = true;

    if (input <= 1) {
        isPrime = false;
    }
    for (int i=2; i<input; i++) { //2,3,4
        if (input%i==0) {
            isPrime = false;
        }
    }
    if (isPrime == true) {
        System.err.println("Prime");
    }
    else {
        System.err.println("Not");
    }
   
    }
}
