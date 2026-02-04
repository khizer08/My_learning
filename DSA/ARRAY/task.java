public class task{
    public static int func(){
        int a[]={12,34,56,78,66,99};
        int largest=Integer.MIN_VALUE; // (-)infinity.
        for(int i=0;i<a.length;i++){
            if(a[i]>largest){
                largest=a[i];
            }
            
        }
        return largest;
    }
    public static void main(String[] args) {
        int result=func();
        System.out.print(result);
    }
}