import java.util.*;
import java.io.*;

public class Main {
    static int N, M, S, P, K, A, B, X, L, R, C;
    static int answer = 0;
    private static int find(String a, String b) {
        LinkedList<Integer> lla = new LinkedList<>();
        LinkedList<Integer> llb = new LinkedList<>();
        for (int i = 0; i < a.length(); i++)
            lla.addLast(a.charAt(i)-'0');
        for (int i = 0; i < b.length(); i++)
            llb.addLast(b.charAt(i)-'0');

        int tmp = b.length()-1;
        while(tmp-->0) lla.addFirst(0);
        tmp = a.length()-1;
        while(tmp-->0) llb.addLast(0);

        tmp = b.length()-1;
        int min = a.length() + b.length();
        for (int i = 0; i < a.length(); i++) {
            int cnt = 0;
            Iterator<Integer> ita = lla.iterator();
            Iterator<Integer> itb = llb.iterator();
            boolean chk = true;
            while (ita.hasNext()) {
                cnt++;
                if (ita.next() + itb.next() == 4) {
                    chk = false;
                    break;
                }
            }
            if (chk && cnt < min)
                min = cnt;

            if (--tmp>=0)
                lla.removeFirst();
            llb.removeLast();
            if (llb.size() < lla.size())
                llb.addFirst(0);
        }
        return min;
    }

    private static void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String a = br.readLine();
        String b = br.readLine();
        answer = Math.min(find(a, b), find(b, a));
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//        StringTokenizer st = new StringTokenizer(br.readLine());

        solution();

        bw.write(answer + "\n");
        bw.flush();

        br.close();
    }
}
