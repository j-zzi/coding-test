import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        for (int i : scoville) {
            queue.offer(i);
        }

        while (queue.size() > 1 && queue.peek() < K) {
            int firstScoville = queue.poll();
            int secondScoville = queue.poll();
            queue.offer(firstScoville + secondScoville * 2);
            answer++;
        }


        return queue.poll() >= K ? answer : -1;
    }
}