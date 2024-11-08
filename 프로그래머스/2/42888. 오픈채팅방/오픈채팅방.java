import java.util.*;

class Solution {
    public String[] solution(String[] record) {
        List<String[]> log = new ArrayList<>();
        HashMap<String, String> member = new HashMap<>();

        for (int i = 0;i<record.length;i++) {
            String[] splitRecord = record[i].split(" ");
            String status = splitRecord[0];
            String userId = splitRecord[1];

            switch (status) {
                case "Enter":
                    member.put(userId, splitRecord[2]);
                    log.add(new String[]{userId, status});
                    break;
                case "Leave":
                    log.add(new String[]{userId, status});
                    break;
                case "Change":
                    member.put(userId, splitRecord[2]);
                    break;
            }
        }
        String[] answer = new String[log.size()];

        for (int i = 0; i < log.size(); i++) {
            String userId = log.get(i)[0];
            String status = log.get(i)[1];
            String comment = status.equals("Enter") ? "님이 들어왔습니다." : "님이 나갔습니다.";
            answer[i] = member.get(userId) + comment;
        }


        return answer;
    }
}