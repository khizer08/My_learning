public class trappedwaterprob {

    public static int func(int height[]) {

        int n = height.length;// length of height array nothing else.

        // calculate left-max boundary (auxiliary-array)
        int leftmax[] = new int[n];
        leftmax[0] = height[0];
        for (int i = 1; i < n; i++) {
            leftmax[i] = Math.max(height[i], leftmax[i - 1]);
        }

        // calculate right-max boundary (auxiliary-array)
        int rightmax[] = new int[n];
        rightmax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightmax[i] = Math.max(height[i], rightmax[i + 1]);
        }

        // loop
        int trappedwater = 0;
        for (int i = 0; i < n; i++) {

            // waterlevel=min(left-max boundary,right-max boundary)
            int waterlevel = Math.min(leftmax[i], rightmax[i]);

            // trappedwater=waterlevel-height[i]
            trappedwater += waterlevel - height[i];

        }

        return trappedwater;
    }

    public static void main(String[] args) {
        int height[] = { 4, 2, 0, 6, 3, 2, 5 };
        System.out.println(func(height));
    }
}