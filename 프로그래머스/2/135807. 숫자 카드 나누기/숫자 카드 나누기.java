import java.util.*;

class Solution {
    public int solution(int[] arrayA, int[] arrayB) {
        int gcdA = findGCD(arrayA);
        int gcdB = findGCD(arrayB);

        List<Integer> divisorsA = findDiv(gcdA);
        List<Integer> divisorsB = findDiv(gcdB);

        int answer = 0;

        for(int divisor:divisorsA){
            answer = canDiv(divisor,arrayB);
            if(answer != 0) break;
        }

        for(int divisor:divisorsB){
            answer = Math.max(answer, canDiv(divisor, arrayA));
            if(answer != 0) break;
        }

        return answer;
    }

    private int canDiv(int divisor, int[] arrayNum){
        for (int j : arrayNum) {
            if (j % divisor == 0) {
                return 0;
            }
        }

        return divisor;
    }

    private List<Integer> findDiv(int number){
        List<Integer> divisors = new ArrayList<>();

        for(int i = 2; i <= number; i++){
            if(number % i == 0) divisors.add(i);
        }

        divisors.sort(Comparator.reverseOrder());

        return divisors;
    }

    private int findGCD(int[] numbers) {
        int gcd = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            gcd = gcd(gcd, numbers[i]);
        }
        return gcd;
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
}
