import java.util.*;
public class AreaOfCircle {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the radius of circle: ");
        float radius=sc.nextFloat();
        double area=(Math.PI*radius*radius);
        System.out.print(area);
    }
}
