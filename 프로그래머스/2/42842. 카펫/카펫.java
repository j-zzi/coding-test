class Solution
{
    public int[] solution(int brown,int yellow)
    {
        int[] answer = new int[2];
        int sum = brown + yellow;

        for (int col = 3; col < sum; col++) {
            int row = sum / col;

            if (sum % row == 0 && col >= row) {
                int center = (col - 2) * (row - 2);

                if (center == yellow) {
                    answer[0] = col;
                    answer[1] = row;

                    return answer;
                }
            }
        }

        return answer;
    }
}