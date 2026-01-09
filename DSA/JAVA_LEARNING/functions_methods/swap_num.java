public class swap_num {

    public static void swap(int a,int b){
        int temp;
        temp=a;
        a=b;
        b=temp;
        System.out.println("a value: "+a);
        System.out.println("b value: "+b);
    }
    public static void main(String[] args) {
        swap(5,10);
    }
}
