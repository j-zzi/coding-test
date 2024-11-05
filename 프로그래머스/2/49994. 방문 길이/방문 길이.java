import java.util.*;

class Solution {
    public int solution(String dirs) {
        int answer = 0;
        HashSet<String> set = new HashSet<>();

        int[] current = {0, 0};
        int[] directionPosition = {0, 0};

        for (int i = 0; i < dirs.length(); i++) {
            char direction = dirs.charAt(i);

            switch (direction) {
                case 'U':
                    directionPosition[1] = current[1] + 1;
                    break;
                case 'D':
                    directionPosition[1] = current[1] - 1;
                    break;
                case 'R':
                    directionPosition[0] = current[0] + 1;
                    break;
                case 'L':
                    directionPosition[0] = current[0] - 1;
                    break;
            }


            if (directionPosition[0] > 5 || directionPosition[0] < -5 || directionPosition[1] > 5 || directionPosition[1] < -5) {
                directionPosition[0] = current[0];
                directionPosition[1] = current[1];
                continue;
            }

            set.add(directionPosition[0] + " " + directionPosition[1] + " " + current[0] + " " + current[1]);
            set.add(current[0] + " " + current[1] + " " + directionPosition[0] + " " + directionPosition[1]);

            current[0] = directionPosition[0];
            current[1] = directionPosition[1];
        }

        return set.size()/2;
    }

}