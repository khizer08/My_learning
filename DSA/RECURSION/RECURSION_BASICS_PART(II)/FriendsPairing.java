public class FriendsPairing {

    public static int FriendsPairingFunc(int n) {
        // base case
        if (n == 1 || n == 2) {
            return n;
        }

        // choice single
        int fnm1 = FriendsPairingFunc(n - 1);

        // choice pair
        int fnm2 = FriendsPairingFunc(n - 2);
        int pairWays = (n - 1) * fnm2;

        int totWays = fnm1 + pairWays;

        return totWays;

    }

    public static void main(String[] args) {
        int n = 3;
        System.out.println(FriendsPairingFunc(n));
    }
}