public class optimised_primeNumber {
    public static boolean isPrime(int number){
        if(number==2){
            return true;// edge case handling.
        }
        for(int i=2;i<=Math.sqrt(number);i++){// optimsed loop
            if(number%i==0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(9));
    }
}