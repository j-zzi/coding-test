import java.util.*;

class Solution {
    public String solution(String number, int k) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < number.length(); i++) {
            char cur = number.charAt(i);
            while (!stack.isEmpty() && stack.peek() < cur && k-- > 0) {
                stack.pop();
            }
            stack.push(cur);
        }

        StringBuilder answer = new StringBuilder();

        while (!stack.isEmpty()) {
            answer.append(stack.pop());
        }

        if (k > 0) {
            return answer.reverse().substring(0, answer.toString().length() - k);
        }

        return answer.reverse().toString();
    }
}