import java.util.*;

class Solution {
    public int solution(String word) {
        List<String> words = new ArrayList<>();

        dfs("", words);

        return words.indexOf(word);
    }

    private void dfs(String s, List<String> words) {
        if (s.length() > 5) {
            return;
        }

        words.add(s);

        for (int i = 0; i < 5; i++) {
            dfs(s + "AEIOU".charAt(i),words);
        }
    }
}