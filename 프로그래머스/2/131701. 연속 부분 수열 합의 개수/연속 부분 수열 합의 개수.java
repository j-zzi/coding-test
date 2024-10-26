import java.util.*;
import java.util.stream.IntStream;

class Solution {
    public int solution(int[] elements) {
        HashSet<Integer> hashSet = new HashSet<>();

        int[] doubleElements = IntStream.concat(Arrays.stream(elements), Arrays.stream(elements)).toArray();

        for (int j = 1; j <= elements.length; j++) {
            for (int i = 0; i < elements.length; i++) {
                hashSet.add(Arrays.stream(Arrays.copyOfRange(doubleElements, i, i + j)).sum());
            }
        }
        return hashSet.size();
    }
}