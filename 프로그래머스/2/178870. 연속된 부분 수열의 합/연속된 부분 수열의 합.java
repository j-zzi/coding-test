class Solution {
    public int[] solution(int[] sequence, int k) {
        int left = 0;
        int length = sequence.length;
        int right = length;
        int sum = 0;

        for (int l = 0, r = 0; l < length; l++) {
            while (r < length && sum < k) {
                sum += sequence[r++];
            }

            if (sum == k) {
                int range = r - l - 1;
                if (range < right - left) {
                    left = l;
                    right = r - 1;
                }
            }

            sum -= sequence[l];
        }

        int[] answer = new int[]{left, right};

        return answer;
    }
}