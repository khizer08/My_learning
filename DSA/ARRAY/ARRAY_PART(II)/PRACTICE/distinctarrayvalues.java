public class distinctarrayvalues {
    public static boolean func(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 4, 5 };
        System.out.println(func(arr));
    }
}
// do try this problem with "hashset" once learnt.