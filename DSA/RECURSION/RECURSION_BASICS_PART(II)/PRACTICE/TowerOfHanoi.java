public class TowerOfHanoi {

    public static void towerOfHanoiFunc(int n, String src, String helper, String dest) {
        if (n == 1) {
            System.out.println("Disk " + n + " transfered from " + src + " to " + dest);
            return;
        }

        towerOfHanoiFunc(n - 1, src, dest, helper);
        System.out.println("Disk " + n + " transfered from " + src + " to " + dest);
        towerOfHanoiFunc(n - 1, helper, src, dest);
    }

    public static void main(String[] args) {
        int n = 3;
        towerOfHanoiFunc(n, "S", "H", "D");
    }
}
