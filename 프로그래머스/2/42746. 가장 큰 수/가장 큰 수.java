import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public String solution(int[] numbers) {
        List<String> strNumbers = Arrays.stream(numbers).mapToObj(String::valueOf).sorted(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return (o2 + o1).compareTo(o1 + o2);
            }
        }).collect(Collectors.toList());

        if (strNumbers.get(0).startsWith("0")) {
            return "0";
        }

        return String.join("", strNumbers);
    }
}