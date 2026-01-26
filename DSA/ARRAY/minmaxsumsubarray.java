public class minmaxsumsubarray{
    public static int[] min_max_sum_sub_array_func(int number[]){
        int min=Integer.MAX_VALUE;// understand.
        int max=Integer.MIN_VALUE;

        for(int i=0;i<number.length;i++){
            for(int j=i;j<number.length;j++){
                System.out.print("[");
                int sum=0;// we need to initialize this varible here itself , as we need to calculate sum for the entire subarray and reset sum to zero.
                for(int k=i;k<=j;k++){
                    System.out.print(" "+number[k]);
                    sum+=number[k];

                    for(int l=0;l<=k;l++){// min and max value in array logic.
                        if(sum>=max){
                            max=sum;
                        }else if(sum<=min){
                            min=sum;
                        }
                    }

                }
                System.out.print("]");
                System.out.print("=");
                System.out.print(sum);
                System.out.println();
            }
            System.out.println();
        }
        System.out.println("The min sum value in the array is: "+min);
        System.out.print("The max sum value in array is: "+max);
        return number;
    }
    public static void main(String[] args) {
        int number[]={1,-2,6,-1,3};
        min_max_sum_sub_array_func(number);
    }
}

// output:-
// [ 1]=1
// [ 1 -2]=-1
// [ 1 -2 6]=5
// [ 1 -2 6 -1]=4
// [ 1 -2 6 -1 3]=7

// [ -2]=-2
// [ -2 6]=4
// [ -2 6 -1]=3
// [ -2 6 -1 3]=6

// [ 6]=6
// [ 6 -1]=5
// [ 6 -1 3]=8

// [ -1]=-1
// [ -1 3]=2

// [ 3]=3

// The min sum value in the array is: -2
// The max sum value in array is: 8