import java.util.*;
import java.io.*;

public class Main {
    static int N, M, S, P, K, A, B, X, L, R;
    static int answer = 0;
    public static void solution() throws IOException {
        for (int i = A; i <= B; i++) {
            if(isUnderPrime(i)) answer++;
        }
    }

    private static boolean isUnderPrime(int number){
        int count = 0;
        if(number == 1) return false;

        for (int i = 2; i <= number; i++) {
            while (number % i == 0) {
                number /= i;
                count++;
            }
        }

        return isPrime(count);
    }

    private static boolean isPrime(int number){
        if(number == 1) return false;

        for(int i = 2; i<=Math.sqrt(number);i++){
            if(number % i == 0) return false;
        }

        return true;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());


        A = Integer.parseInt(st.nextToken());
        B = Integer.parseInt(st.nextToken());


        solution();

        bw.write(answer + "\n");
        bw.flush();

        br.close();
    }
}
