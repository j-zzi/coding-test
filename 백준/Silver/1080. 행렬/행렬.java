import java.util.*;
import java.io.*;

public class Main {
    static int N, M, S, P, K, A, B, X, R;
    static int answer = 0;
    static int[][] matrixA;
    static int[][] matrixB;
    public static void solution() throws IOException {
        for (int i = 0; i < N - 2; i++) {
            for (int j = 0; j < M - 2; j++) {
                if ((matrixA[i][j] ^ matrixB[i][j]) ==1){
                    bitNotOperation(i, j);
                    answer++;
                }
            }
        }

        for(int i=0;i<N; i++) {
            for (int j = 0; j < M; j++) {
                if (matrixA[i][j] != matrixB[i][j]) {
                    answer = -1;
                    break;
                }
            }
        }
    }

    private static void bitNotOperation(int r,int c){
        for(int i = r; i < r + 3; i++){
            for (int j = c; j < c + 3; j++) {
                matrixA[i][j] = ~matrixA[i][j] & 1;
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());


        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        matrixA = new int[N][M];
        matrixB = new int[N][M];

        for(int i=0;i<N; i++) {
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken();
            for(int j=0;j<str.length(); j++) {
                matrixA[i][j] = str.charAt(j) - '0';
            }
        }

        for(int i=0;i<N; i++) {
            st = new StringTokenizer(br.readLine());
            String str = st.nextToken();
            for(int j=0;j<str.length(); j++) {
                matrixB[i][j] = str.charAt(j) - '0';
            }
        }

        solution();

        bw.write(answer + "\n");
        bw.flush();

        br.close();
    }
}
