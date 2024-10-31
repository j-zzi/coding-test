import java.util.*;

class Solution {
    static class Node {
        String word;
        int count;

        public Node(String word, int count) {
            this.word = word;
            this.count = count;
        }
    }
    public int solution(String begin, String target, String[] words) {
        boolean[] visited = new boolean[words.length];

        return bfs(begin, target, visited, words);
    }

    public int bfs(String begin, String target, boolean[] visited, String[] words) {
        Queue<Node> queue = new LinkedList<>();

        queue.offer(new Node(begin, 0));

        while (!queue.isEmpty()) {
            Node currentNode = queue.poll();

            if (currentNode.word.equals(target)) return currentNode.count;

            for (int i = 0; i < visited.length; i++) {
                if (!visited[i] && canChange(currentNode.word, words[i])) {
                    visited[i] = true;
                    queue.offer(new Node(words[i], currentNode.count + 1));
                }
            }
        }
        return 0;
    }

    private static boolean canChange(String word1, String word2) {
        int diffCount = 0;

        for (int i = 0; i < word1.length(); i++) {
            if (word1.charAt(i) != word2.charAt(i)) {
                diffCount++;
                if (diffCount > 1) return false;
            }
        }

        return diffCount == 1;
    }
}