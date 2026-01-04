import java.util.*;
public class third {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the cost of pencil: ");
        float pencil=sc.nextFloat();
        System.out.print("Enter the cost of pen: ");
        float pen=sc.nextFloat();
        System.out.print("Enter the cost of eraser: ");
        float eraser=sc.nextFloat();
        double total=(pencil+pen+eraser)+(pencil+pen+eraser)*0.18;
        System.out.println("The total cost is "+total+"(with 18% gst)");
    }
}
