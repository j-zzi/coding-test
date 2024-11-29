import java.util.*;
import java.io.*;

public class Main {
    static int N, M, S, P, K, A, B, X, L, R;
    static int answer = 0;
    static String[] arr;
    public static void solution() throws IOException {
        Arrays.sort(arr, Comparator.reverseOrder());

        List<String> list = new ArrayList<>();

        for (String str : arr) {
            boolean isStartWith = false;
            if (list.isEmpty()) {
                list.add(str);
                continue;
            }
            for (String s : list) {
                if (s.startsWith(str)) {
                    isStartWith = true;
                    break;
                }
            }
            if(!isStartWith) list.add(str);
        }

        answer = list.size();
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());

        arr = new String[N];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            arr[i] = st.nextToken();
        }

        solution();

        bw.write(answer + "\n");
        bw.flush();

        br.close();
    }
}
