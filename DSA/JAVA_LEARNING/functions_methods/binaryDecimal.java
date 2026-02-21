import java.util.Scanner;

public class binaryDecimal {

    public static int binToDecFun(int binaryNum) {// binary to decimal function.
        int power = 0, decimal = 0;
        while (binaryNum > 0) {
            int lastDigit = binaryNum % 10;// fetching last digit.
            decimal = decimal + (lastDigit * (int) Math.pow(2, power));// binary to decimal logic.
            binaryNum = binaryNum / 10;// removing lastdigit(as it is used).
            power++;
        }
        return decimal;
    }

    public static int decToBinFunc(int decimalNum) {// decimal to binary function.
        int remainder = 0, binary = 0, power = 0;
        while (decimalNum > 0) {
            remainder = decimalNum % 2;// fetching remainder of "number".
            binary = binary + (remainder * (int) Math.pow(10, power));// decimal to binary logic.
            power++;
            decimalNum = decimalNum / 2;// fetching quotient of "number".
        }
        return binary;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int binaryNum, decimalNum;
        System.out.print("Enter the binary number to convert to decimal: ");
        binaryNum = sc.nextInt();
        System.out.println("The Decimal form of " + binaryNum + " is: " + binToDecFun(binaryNum));
        System.out.print("Enter the decimal number to convert to binary: ");
        decimalNum = sc.nextInt();
        System.out.println("The Binary form of " + decimalNum + " is: " + decToBinFunc(decimalNum));

        sc.close();
    }
}