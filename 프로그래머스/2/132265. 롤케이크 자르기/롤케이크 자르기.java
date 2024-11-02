import java.util.*;

class Solution {
    public int solution(int[] topping) {
        int answer = 0;

        HashMap<Integer, Integer> leftMap = new HashMap<>();
        HashMap<Integer, Integer> rightMap = new HashMap<>();

        leftMap.put(topping[0], 1);

        for (int i = 1; i < topping.length; i++) {
            rightMap.put(topping[i], rightMap.getOrDefault(topping[i], 0) + 1);
        }

        for (int i = 1; i < topping.length - 1; i++) {
            if (leftMap.size() == rightMap.size()) {
                answer++;
            }

            leftMap.put(topping[i], leftMap.getOrDefault(topping[i], 0) + 1);

            if (rightMap.get(topping[i]) == 1) {
                rightMap.remove(topping[i]);
            } else{
                rightMap.put(topping[i], rightMap.get(topping[i]) - 1);
            }
        }

        return answer;
    }
}