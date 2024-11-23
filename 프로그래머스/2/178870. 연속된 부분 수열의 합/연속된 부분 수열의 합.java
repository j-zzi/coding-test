class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = new int[]{0, sequence.length};

        int left = 0;
        int right = 0;
        int sum = sequence[0];

        while (left < sequence.length && right < sequence.length) {
            if (sum == k) {
                int range = answer[1] - answer[0];

                if (range > right - left) {
                    answer[0] = left;
                    answer[1] = right;
                }
            }

            if (sum <= k) {
                right++;
                if (right < sequence.length) {
                    sum += sequence[right];
                }
            } else {
                sum -= sequence[left];
                left++;
            }
        }
        return answer;
    }
}