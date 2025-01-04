import java.util.*;

class Solution {
    static int[][] map;
    static boolean[][] visited;
    static int[] dx = {0, 0, -1, 1};
    static int[] dy = {1, -1, 0, 0};
    static List<Integer> answer = new ArrayList<>();
    static int sum = 0;
    public int[] solution(String[] maps) {
        map = new int[maps.length][maps[0].length()];

        for (int i = 0; i < maps.length; i++) {
            for (int j = 0; j < maps[i].length(); j++) {
                if(maps[i].charAt(j) == 'X'){
                    map[i][j] = 0;
                }else {
                    map[i][j] = maps[i].charAt(j) - '0';
                }
            }
        }

        visited = new boolean[map.length][map[0].length];

        for (int i = 0; i < map.length; i++) {
            for (int j = 0; j < map[0].length; j++) {
                if(canMove(i,j)) {
                    sum = 0;
                    dfs(i, j);
                    answer.add(sum);
                }
            }
        }

        if (answer.isEmpty()) {
            answer.add(-1);
        }


        answer.sort(Comparator.naturalOrder());

        return answer.stream().mapToInt(Integer::intValue).toArray();
    }

    private void dfs(int x, int y) {
        visited[x][y] = true;
        sum += map[x][y];
        for (int i = 0; i < 4; i++) {
            int mx = x + dx[i];
            int my = y + dy[i];

            if (canMove(mx, my)) {
                dfs(mx, my);
            }
        }
    }

    private boolean canMove(int x, int y) {
        return x >= 0 && x < map.length && y >= 0 && y < map[0].length && map[x][y] != 0 && !visited[x][y];
    }
}