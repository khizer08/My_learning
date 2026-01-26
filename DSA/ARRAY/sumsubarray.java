public class sumsubarray{
    public static int[] sum_sub_array_func(int number[]){
        for(int i=0;i<number.length;i++){
            for(int j=i;j<number.length;j++){
                System.out.print("[");
                int sum=0;// we need to initialize this varible here itself , as we need to calculate sum for the entire subarray and reset sum to zero.
                for(int k=i;k<=j;k++){
                    System.out.print(" "+number[k]);
                    sum+=number[k];
                }
                System.out.print("]");
                System.out.print("=");
                System.out.print(sum);
            }
            System.out.println();
        }
        return number;
    }
    public static void main(String[] args) {
        int number[]={2,4,6,8,10};
        sum_sub_array_func(number);
    }
}

// output:-
// [ 2]=2[ 2 4]=6[ 2 4 6]=12[ 2 4 6 8]=20[ 2 4 6 8 10]=30
// [ 4]=4[ 4 6]=10[ 4 6 8]=18[ 4 6 8 10]=28
// [ 6]=6[ 6 8]=14[ 6 8 10]=24
// [ 8]=8[ 8 10]=18
// [ 10]=10