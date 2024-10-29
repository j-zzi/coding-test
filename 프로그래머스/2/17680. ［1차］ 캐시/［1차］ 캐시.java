import java.util.*;
class Solution {
    public int solution(int cacheSize, String[] cities) {
        int answer = 0;

        List<String> cache = new ArrayList<>();

        for (String city : cities) {
            city = city.toLowerCase();
            int idx = cache.indexOf(city);

            if (idx >= 0) {
                cache.remove(idx);
                cache.add(city);
                answer += 1;
            } else {
                cache.add(city);
                answer += 5;
            }

            if (cache.size() > cacheSize) {
                cache.remove(0);
            }
        }
        return answer;
    }
}