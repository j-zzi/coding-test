import java.util.*;
import java.io.*;

public class Main {
    static int n,r1,c1,r2, c2;
    static int answer = 0;

    private static void solution() throws IOException {
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        for(int i = 0, s = r1; i < r2 -r1 +1; i++,s++){
            for(int j = 0, t = c1; j < c2 - c1 +1; j++, t++){
                int x = s % (2 * n - 1);
                int y = t % (2 * n - 1);
                int dis = Math.abs(n-1-x) + Math.abs(n-1-y);

                if(dis > n -1) bw.write(".");
                else bw.write(Character.toString((dis%26)+'a'));
            }
            bw.newLine();
        }

        bw.flush();
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        r1 = Integer.parseInt(st.nextToken());
        c1 = Integer.parseInt(st.nextToken());
        r2 = Integer.parseInt(st.nextToken());
        c2 = Integer.parseInt(st.nextToken());

        solution();

        br.close();
    }
}
