import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0,0};
        HashSet<String> usedWords = new HashSet<>();
        char lastWord = words[0].charAt(words[0].length() - 1);
        usedWords.add(words[0]);

        for (int i = 1; i < words.length; i++) {
            char firstWord = words[i].charAt(0);
            usedWords.add(words[i]);

            if (usedWords.size() != i + 1 || lastWord != firstWord) {
                answer[0] = i % n + 1;
                answer[1] = i / n + 1;

                return answer;
            }
            lastWord = words[i].charAt(words[i].length() - 1);
        }

        return answer;
    }
}