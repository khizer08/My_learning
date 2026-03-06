public class stock {

    public static int func(int price[]) {

        int n = price.length, buyPrice = Integer.MAX_VALUE, maxProfit = 0;
        for (int i = 0; i < n; i++) {
            if (buyPrice < price[i]) {
                int profit = price[i] - buyPrice;
                maxProfit = Math.max(maxProfit, profit);
            } else {
                buyPrice = price[i];
            }
        }
        return maxProfit;

    }

    public static void main(String[] args) {
        int price[] = { 7, 1, 5, 3, 6, 4 };
        System.out.println(func(price));
    }
}