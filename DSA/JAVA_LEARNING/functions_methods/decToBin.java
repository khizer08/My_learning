public class decToBin{

    public static int decToBinFunc(int number){
        int remainder=0,bin=0,power=0;
        while(number>0){
            remainder=number%2;
            bin=bin+(remainder*(int)Math.pow(10,power));
            power++;
            number=number/2;
        }
        return bin;
    }
    public static void main(String[] args) {
        System.out.println(decToBinFunc(23));
    }
}