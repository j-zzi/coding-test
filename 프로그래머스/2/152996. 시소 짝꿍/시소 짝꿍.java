import java.util.*;

class Solution {
    public long solution(int[] weights) {
        long answer = 0;
        HashMap<Double, Integer> map = new HashMap<>();
        Arrays.sort(weights);
        double[] ratio = new double[]{1.0, 1.5, 2.0, 4.0 / 3.0};

        for (Integer weight : weights) {
            double w = Double.valueOf(weight);

            if (map.containsKey(w)) {
                answer += map.get(w);
            }

            for (double v : ratio) {
                map.put(w * v, map.getOrDefault(w * v, 0) + 1);
            }
        }

        return answer;
    }
}