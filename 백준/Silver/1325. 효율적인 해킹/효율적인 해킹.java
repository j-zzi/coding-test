import java.util.*;
import java.io.*;

public class Main {
    static int N,M;
    static String answer;
    static boolean[] visited;
    static List<Integer>[] graph;
    static int[] hackingCount;

    private static void solution() throws IOException {
        hackingCount = new int[N + 1];

        for (int i = 1; i <= N; i++) {
            bfs(i);
        }

        int max = 0;
        for (int count : hackingCount) {
            max = Math.max(max, count);
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 1; i < hackingCount.length; i++) {
            if (hackingCount[i] == max) {
                sb.append(i).append(" ");
            }
        }

        answer = String.valueOf(sb);
    }

    private static void bfs(int startNode) {
        visited = new boolean[N + 1];

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(startNode);
        visited[startNode] = true;

        while (!queue.isEmpty()) {
            int poll = queue.poll();

            for (int node : graph[poll]) {
                if (!visited[node]) {
                    visited[node] = true;
                    queue.offer(node);
                    hackingCount[node]++;
                }
            }


        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        graph = new ArrayList[N + 1];

        for (int i = 1; i <= N; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int pc1 = Integer.parseInt(st.nextToken());
            int pc2 = Integer.parseInt(st.nextToken());

            graph[pc1].add(pc2);

        }

        solution();

        bw.write(answer);
        bw.flush();

        br.close();
    }
}
