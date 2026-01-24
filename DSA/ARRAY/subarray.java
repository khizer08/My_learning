public class subarray{

    public static void subarray_func(int number[]){
        int ts=0;// to calculate total subarrays.
        for(int i=0;i<number.length;i++){// logic behind this loop is to take "starting" element.
            for(int j=i;j<number.length;j++){// logic behind this loop is to take "ending" element.
                System.out.print("[");
                for(int k=i;k<=j;k++){// this loop is to print.
                    System.out.print(" "+number[k]);
                }
                ts++;
                System.out.print("]"+" ");
            }
            System.out.println();
        }
        System.out.println("Total subarrays ="+ts);
    }
    public static void main(String[] args) {
        int number[]={2,4,6,8,10};
        subarray_func(number);
    }
}