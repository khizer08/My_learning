import java.util.*;

public class inverted_half_pyramid_num{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int k=0;
        System.out.print("Enter the number: ");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-k;j++){
                System.out.print(j);
            }
            System.out.println();
            k++;
        }

        sc.close();
    }
}

// output:-
// 12345
// 1234
// 123
// 12
// 1