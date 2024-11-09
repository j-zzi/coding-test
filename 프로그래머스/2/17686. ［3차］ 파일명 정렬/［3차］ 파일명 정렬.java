import java.util.*;

class Solution {
    public String[] solution(String[] files) {
        Arrays.sort(files,(a,b)->{
            String[] partsA = splitFileName(a);
            String[] partsB = splitFileName(b);

            int headCompare = partsA[0].compareToIgnoreCase(partsB[0]);
            if (headCompare != 0) {
                return headCompare;
            }

            int numA = Integer.parseInt(partsA[1]);
            int numB = Integer.parseInt(partsB[1]);

            return Integer.compare(numA, numB);
        });

        return files;
    }

    private String[] splitFileName(String file) {
        String head = file.split("\\d")[0];
        String number = file.substring(head.length()).split("\\D+")[0];
        return new String[]{head, number};
    }
}