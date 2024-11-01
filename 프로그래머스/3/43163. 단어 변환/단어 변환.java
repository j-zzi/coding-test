import java.util.*;

class Solution {
    class Node{
        String word;
        int step;

        public Node(String word, int step) {
            this.word = word;
            this.step = step;
        }
    }
    public int answer = 0;
    public int solution(String begin, String target, String[] words) {
        boolean[] visited = new boolean[words.length];
        return bfs(begin, target, visited, words);
    }

    public int bfs(String begin, String target, boolean[] visited, String[] words) {
        Queue<Node> queue = new LinkedList<>();
        queue.offer(new Node(begin, 0));

        while (!queue.isEmpty()) {
            Node currentNode = queue.poll();
            String currentWord = currentNode.word;
            int currentStep = currentNode.step;

            if (currentWord.equals(target) ) {
                return currentStep;
            }

            for (int i = 0; i < words.length; i++) {
                if (canChange(currentWord, words[i]) && !visited[i]) {
                    visited[i] = true;
                    queue.offer(new Node(words[i], currentStep + 1));
                }
            }
        }
        return 0;
    }

    private boolean canChange(String word1, String word2) {
        int diffCount = 0;
        for (int i = 0; i < word1.length(); i++) {
            if (word1.charAt(i) != word2.charAt(i)) diffCount++;
        }

        return diffCount == 1;
    }
}