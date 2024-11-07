class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        String binaryNumber = Integer.toString(n, k);
        String[] splitNumber = binaryNumber.split("0");

        for (String number : splitNumber) {
            if (!number.isBlank() && isPrime(Long.parseLong(number))) answer++;
        }

        return answer;
    }

    private boolean isPrime(Long number) {
        if (number <= 1) {
            return false;
        }

        for (int i = 2; i < (int) Math.sqrt(number) + 1; i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}