import java.util.*;
class Solution {
    public int solution(String s) {
        int answer = 0;

        Queue<String> queue = new LinkedList<>();

        for (int i = 0; i < s.length(); i++) {
            queue.add(String.valueOf(s.charAt(i)));
        }

        for (int i = 0; i < s.length(); i++) {
            Stack<String> stack = new Stack<>();

            String firstStr = queue.poll();
            queue.add(firstStr);

            for (int j = 0; j < s.length(); j++) {
                String waitingStr = queue.poll();
                queue.add(waitingStr);


                if (stack.isEmpty()) {
                    stack.push(waitingStr);
                } else if (stack.peek().equals("[") && waitingStr.equals("]")) {
                    stack.pop();
                } else if (stack.peek().equals("{") && waitingStr.equals("}")) {
                    stack.pop();
                } else if (stack.peek().equals("(") && waitingStr.equals(")")) {
                    stack.pop();
                } else{
                    stack.push(waitingStr);
                }
            }

            if (stack.isEmpty()) {
                answer++;
            }
        }

        return answer;
    }
}