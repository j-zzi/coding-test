import java.util.*;
class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;

        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        HashMap<String, Integer> firstMap = new HashMap<>();
        HashMap<String, Integer> secondMap = new HashMap<>();

        for (int i = 0; i < str1.length()-1; i++) {
            String twoWord = str1.substring(i, i + 2);
            if (twoWord.matches("^[a-z]*$")) {
                firstMap.put(twoWord, firstMap.getOrDefault(twoWord, 0) + 1);
            }
        }

        for (int i = 0; i < str2.length()-1; i++) {
            String twoWord = str2.substring(i, i + 2);
            if (twoWord.matches("^[a-z]*$")) {
                secondMap.put(twoWord, secondMap.getOrDefault(twoWord, 0) + 1);
            }
        }

        HashMap<String, Integer> intersectionMap = new HashMap<>();
        HashMap<String, Integer> unionMap = new HashMap<>();

        for (String key : firstMap.keySet()) {
            if (secondMap.containsKey(key)) {
                intersectionMap.put(key, Math.min(firstMap.get(key), secondMap.get(key)));
                unionMap.put(key, Math.max(firstMap.get(key),secondMap.get(key)));
                secondMap.remove(key);
            } else {
                unionMap.put(key, firstMap.get(key));
            }
        }

        for (String key : secondMap.keySet()) {
            unionMap.put(key, secondMap.get(key));
        }

        int intersection = intersectionMap.values().stream().reduce(0, Integer::sum);
        int union = unionMap.values().stream().reduce(0,Integer::sum);

        int similarity = (int) ((double) intersection / union * 65536);

        return union == 0 ? 65536 : similarity;
    }
}