class Solution {
    public String solution(int n, int t, int m, int p) {
        StringBuilder answer = new StringBuilder();

        int currentNum = 0;
        int currentTurn = 0;

        while (answer.length() < t) {
            String convertedNum = convertNum(currentNum, n);

            for (int i = 0; i < convertedNum.length(); i++) {
                if (currentTurn == p-1) {
                    answer.append(convertedNum.charAt(i));
                }

                if (answer.length() == t) {
                    return answer.toString();
                }

                currentTurn = (currentTurn + 1) % m;
            }
            currentNum++;
        }
        return answer.toString();
    }

    private String convertNum(int number, int n) {
        if (n == 0) {
            return "0";
        }

        return Integer.toString(number, n).toUpperCase();
    }
}