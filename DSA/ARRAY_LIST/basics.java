import java.util.ArrayList;

public class basics {
    public static void main(String[] args) {
        ArrayList<Integer> list1 = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            list1.add(i);
        }
        System.out.println(list1);
        for (int i = list1.size() - 1; i >= 0; i--) {
            list2.add(list1.get(i));
        }

        System.out.println(list2);

    }
}