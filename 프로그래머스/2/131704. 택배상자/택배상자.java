import java.util.*;

class Solution {
    public int solution(int[] order) {
        int answer = 0;
        int index = 0;

        Stack<Integer> assistBelt = new Stack<>();

        for (int i = 1; i <= order.length; i++) {
            if (i == order[index]) {
                answer++;
                index++;
            } else if (!assistBelt.isEmpty() && assistBelt.peek() == order[index]) {
                assistBelt.pop();
                answer++;
                index++;
                i--;
            } else {
                assistBelt.push(i);
            }
        }

        while (!assistBelt.isEmpty()) {
            if (assistBelt.peek() == order[index]) {
                assistBelt.pop();
                answer++;
                index++;
            } else {
                break;
            }
        }


        return answer;
    }
}