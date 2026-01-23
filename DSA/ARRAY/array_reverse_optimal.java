public class array_reverse_optimal{

    public static int[] array_reverse_optimal_func(int number[]){
        int first=0,last=number.length-1;
        while(first!=last){

            //swap logic.
            int temp=number[last];
            number[last]=number[first];
            number[first]=temp;

            first++;
            last--;
        }
        return number;

    }
    public static void main(String[] args) {
        int number[]={2,4,6,8,10};
        array_reverse_optimal_func(number);
        
        for(int i=0;i<number.length;i++){
            System.out.print(number[i]+" ");
        }
        System.out.println();
    }
}