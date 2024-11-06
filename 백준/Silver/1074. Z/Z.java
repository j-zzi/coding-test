import java.util.*;
import java.io.*;

public class Main {
    public static int answer = 0;
    public static void solution(int r, int c, int size) throws IOException {

        if (size == 1) {
            System.out.println(answer);
            return;
        }


        if (r < size / 2 && c < size / 2) {
            solution(r, c, size / 2);
        } else if (r < size / 2 && c >= size / 2) {
            answer += size * size / 4;
            solution(r, c - size / 2, size / 2);
        } else if (r >= size / 2 && c < size / 2) {
            answer += (size * size / 4) * 2;
            solution(r - size / 2, c, size / 2);
        } else {
            answer += (size * size / 4) * 3;
            solution(r - size / 2, c - size / 2, size / 2);
        }



    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());


        int n = Integer.parseInt(st.nextToken());
        int r = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());
        int size = (int) Math.pow(2, n);

        solution(r, c, size);


        br.close();
    }
}