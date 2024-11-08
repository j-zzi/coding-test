import java.util.*;

class Solution {
    public int solution(int x, int y, int n) {
        return bfs(x, y, n);
    }

    private int bfs(int x, int y, int n) {
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{x, 0});

        boolean[] visited = new boolean[y + 1];

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int currentX = current[0];
            int count = current[1];

            if(currentX == y) return count;

            if (currentX + n <= y && !visited[currentX + n]) {
                queue.add(new int[]{currentX + n, count + 1});
                visited[currentX + n] = true;
            }

            if (currentX * 2 <= y && !visited[currentX * 2]) {
                queue.add(new int[]{currentX * 2, count + 1});
                visited[currentX * 2] = true;
            }
            if (currentX * 3 <= y && !visited[currentX * 3]) {
                queue.add(new int[]{currentX * 3, count + 1});
                visited[currentX * 3] = true;
            }
        }

        return -1;
    }
}