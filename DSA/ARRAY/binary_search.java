public class binary_search{

    public static int binary_func(int number[],int key){
        int start=0,end=number.length-1;
        while(start<=end){
            int mid=(start+end)/2;// each time mid is calculated.
            if(number[mid]==key){// found.
                return mid;
            }
            if(number[mid]>key){// first half checking.
                end=mid-1;
            }else{// second half checking.
                start=mid+1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int number[]={12,45,67,88,92,98};
        int key=92;
        int result =binary_func(number,key);
        System.out.print("The index of the element is: "+result);
    }
}