class Solution {
    public String solution(String s) {
        String answer = "";
        String[] splitArr = s.split(" ");

        for (String string : splitArr) {

            if (string.isEmpty()) {
                answer += " ";
            } else{
                answer += string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase() + " ";
            }
        }

        if(s.charAt(s.length() - 1) == ' '){
            return answer;
        }

        return answer.substring(0, answer.length()-1);
    }
}