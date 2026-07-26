public class InterfacePractice {
    public static void main(String[] args) {
        Queen q = new Queen();
        q.moves();
    }
}

interface ChessPlayer {
    void moves(); // by default the method of interface is "Public","Abstract" and "without
                  // implementation"
}

class Queen implements ChessPlayer {
    public void moves() {
        System.out.println("up,down,right,left, diagonal in all direction");
    }
}

class King implements ChessPlayer {
    public void moves() {
        System.out.println("up,down,right,left, diagonal 1 step at a time");
    }
}