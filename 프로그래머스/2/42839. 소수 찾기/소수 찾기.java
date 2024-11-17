import java.util.*;

class Solution {
    
    static HashSet<Integer> primeNumbers = new HashSet<>(); // 소수를 저장할 HashSet
    
    public int solution(String numbers) {
        boolean[] visit = new boolean[numbers.length()]; // 숫자의 방문 여부를 체크하는 배열
        
        // 모든 가능한 숫자의 자릿수로 순열을 생성 (1자리, 2자리, ..., n자리)
        for (int i = 1; i <= visit.length; i++) {
            permutation(numbers, visit, 0, i, ""); // 순열 생성 시작
        }
        
        return primeNumbers.size(); // 저장된 소수의 개수를 반환
    }
    
    // 순열을 재귀적으로 생성
    public void permutation(String numbers, boolean[] visit, int idx, int count, String current) {
        if (idx == count) { // 원하는 자릿수에 도달한 경우
            int num = Integer.parseInt(current); // 현재 생성된 숫자로 변환
            
            // 소수 판별 후, 소수이면 HashSet에 추가
            if (num > 1 && isPrime(num)) {
                primeNumbers.add(num);
            }
        }
        
        // 각 자리의 숫자를 차례로 사용하여 순열을 생성
        for (int i = 0; i < visit.length; i++) {
            if (!visit[i]) { // 방문하지 않은 숫자를 선택
                visit[i] = true; // 해당 숫자 방문 표시
                permutation(numbers, visit, idx+1, count, current + numbers.charAt(i)); // 재귀 호출
                visit[i] = false; // 순열 생성을 마치면 방문 표시를 해제
            }
        }
    }
    
    // 소수 판별
    public boolean isPrime(int n) {
        boolean result = true;
        
        // 2부터 n의 제곱근까지 나누어 떨어지는지 확인
        for (int i = 2; i < (int) Math.sqrt(n) + 1; i++) {
            if (n % i == 0) {
                result = false; // 나누어 떨어지면 소수가 아님
                break;
            }
        }
        
        return result; // 소수 여부 반환
    }
}
