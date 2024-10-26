import java.util.*;

class Solution {
    public int solution(int k,int[] tangerine) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        int cnt = 0;

        for (int i : tangerine) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }

        List<Integer> list = new ArrayList<>(map.values());
        list.sort(Comparator.reverseOrder());

        for (Integer i : list) {
            if (sum + i >= k) {
                cnt++;
                return cnt;
            }

            sum += i;
            cnt++;
        }

        return cnt;
    }
}