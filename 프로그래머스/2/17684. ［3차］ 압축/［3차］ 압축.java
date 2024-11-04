import java.util.*;

class Solution {
    public int[] solution(String msg) {
        List<Integer> out = new ArrayList<>();
        List<String> dic = new ArrayList<>();

        for(int i = 0 ; i < 26; i++) {
            dic.add(String.valueOf((char)('A'+i)));
        }

        for (int i = 0; i < msg.length(); i++) {
            for (int j = dic.size() - 1; j >= 0; j--) {
                if (msg.substring(i).startsWith(dic.get(j))) {
                    i += dic.get(j).length() - 1;
                    out.add(j + 1);

                    if (i < msg.length() - 1) {
                        dic.add(dic.get(j) + msg.charAt(i + 1));
                    }
                    break;
                }
            }
        }

        int[] answer = new int[out.size()];

        for (int i = 0; i < out.size(); i++) {
            answer[i] = out.get(i);
        }

        return answer;
    }
}