import java.util.*;
class Solution {
    public int solution(int n, int[][] computers) {
        int answer = 0;
        boolean[] visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                answer++;
//                dfs(i, visited, computers);
                bfs(i, visited, computers);
            }
        }

        return answer;
    }

    public void dfs(int node, boolean[] visited, int[][] computers) {
        visited[node] = true;

        for (int i = 0; i < computers[node].length; i++) {
            if (i != node && !visited[i] && computers[node][i] == 1) {
                dfs(i, visited, computers);
            }
        }
    }

    public void bfs(int node, boolean[] visited, int[][] computers) {
        visited[node] = true;

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(node);

        while (!queue.isEmpty()) {
            int currentNode = queue.poll();
            for (int i = 0; i < visited.length; i++) {
                if (i != currentNode && !visited[i] && computers[currentNode][i] == 1) {
                    visited[i] = true;
                    queue.offer(i);
                }
            }
        }
    }
}