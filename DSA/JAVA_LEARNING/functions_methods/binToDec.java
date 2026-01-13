public class binToDec{
    public static int binToDecFun(int binaryNum){
        int power=0,decimal=0;
        while(binaryNum>0){
            int lastDigit=binaryNum%10;// fetching last digit.
            decimal=decimal+(lastDigit*(int)Math.pow(2,power));// binary to decimal logic.
            binaryNum=binaryNum/10;// removing lastdigit(as it is used).
            power++;
        }
        return decimal;
    }
    public static void main(String[] args) {
        System.out.println(binToDecFun(1000));
    }
}