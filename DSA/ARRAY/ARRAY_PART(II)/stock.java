public class stock {

    public static int func(int price[]) {

        int n = price.length, buyPrice = price[0], sellPrice = 0, profit = 0,index=-1;
        for (int i = 0; i < n; i++) {
            buyPrice = Math.min(buyPrice, price[i]);
        }
        for (int i = price[buyPrice]; i < n; i++) {
            sellPrice = Math.max(sellPrice, price[i]);
            profit = sellPrice - buyPrice;
        }
        return profit;

    }

    public static void main(String[] args) {
        int price[] = { 7, 1, 5, 3, 6, 4 };
        System.out.println(func(price));
    }
}