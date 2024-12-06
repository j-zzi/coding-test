import java.util.*;
import java.io.*;

public class Main {
    static int N,M;
    static int[] answer = new int[2];
    static int power;
    static String[][] map;
    static boolean[][] visited;
    static final int[] dx = {0, 0, -1, 1};
    static final int[] dy = {-1, 1, 0, 0};

    private static void solution() throws IOException {
        visited = new boolean[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                if(!visited[i][j]){
                    if (map[i][j].equals("W")) {
                        power = 0;
                        dfs("W", i, j);
                        answer[0] = answer[0] + power * power;
                    } else {
                        power = 0;
                        dfs("B", i, j);
                        answer[1] = answer[1] + power * power;
                    }
                }
            }
        }
    }

    private static void dfs(String searchSoldier, int x, int y) {
        visited[x][y] = true;
        power++;
        for (int i = 0; i < 4; i++) {
            int mX = x + dx[i];
            int mY = y + dy[i];

            if (canMove(mX, mY,searchSoldier)) {
                dfs(searchSoldier, mX, mY);
            }
        }

    }

    private static boolean canMove(int x, int y,String searchSoldier) {
        return  x >= 0 && x < M && y >= 0 && y < N && !visited[x][y] && map[x][y].equals(searchSoldier);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        map = new String[M][N];

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken();
            for (int j = 0; j < N; j++) {
                map[i][j] = str.charAt(j) + "";
            }
        }

        solution();

        bw.write(answer[0] + " " + answer[1]);
        bw.flush();

        br.close();
    }
}
