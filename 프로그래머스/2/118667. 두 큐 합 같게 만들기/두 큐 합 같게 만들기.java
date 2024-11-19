import java.util.*;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        int answer = -1;

        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();

        long sum1 = 0;
        long sum2 = 0;

        for (int i : queue1) {
            sum1 += i;
            q1.offer(i);
        }

        for (int i : queue2) {
            sum2 += i;
            q2.offer(i);
        }

        long target = (sum1 + sum2) / 2;
        int count = 0;

        if ((sum1 + sum2) % 2 != 0) {
            return -1;
        }

        while (count <= queue1.length * 3) {
            if (sum1 > sum2) {
                int poll = q1.poll();
                q2.offer(poll);

                sum1 -= poll;
                sum2 += poll;
            } else if (sum2 > sum1) {
                int poll = q2.poll();
                q1.offer(poll);

                sum1 += poll;
                sum2 -= poll;
            } else {
                answer = count;
                break;
            }
            count++;
        }

        return answer;
    }
}