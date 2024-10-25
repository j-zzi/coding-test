import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0,0};
        Stack<String> usedWords = new Stack<>();
        usedWords.push(words[0]);

        for (int i = 1; i < words.length; i++) {
            char lastWord = usedWords.peek().charAt(words[i-1].length() - 1);
            char firstWord = words[i].charAt(0);

            if (lastWord != firstWord || usedWords.contains(words[i])) {
                answer[0] = (i + n) % n + 1;
                answer[1] = (int) i / n + 1;

                return answer;
            }

            usedWords.push(words[i]);
        }

        return answer;
    }
}