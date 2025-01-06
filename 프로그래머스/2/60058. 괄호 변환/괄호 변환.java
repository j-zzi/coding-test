class Solution {
    public String solution(String p) {
        if(p.isEmpty()){
            return p;
        }

        StringBuilder answer = new StringBuilder();

        int left = 0;
        int right = 0;
        String u = "";
        String v = "";

        for (int i = 0; i < p.length(); i++) {
            if(p.charAt(i) == '('){
                left++;
            }else {
                right++;
            }

            if (left == right) {
                u = p.substring(0, i + 1);
                v = p.substring(i + 1);
                break;
            }
        }

        if(isCorrect(u)){
            return answer.append(u).append(solution(v)).toString();
        }


        return answer.append("(").append(solution(v)).append(")").append(reverse(u)).toString();
    }

    private String reverse(String u) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i < u.length() - 1; i++) {
            if (u.charAt(i) == '(') {
                sb.append(')');
            } else {
                sb.append('(');
            }
        }
        return sb.toString();
    }

    private boolean isCorrect(String u) {
        int left = 0;
        int right = 0;
        for (int i = 0; i < u.length(); i++) {
            if (u.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (right > left) {
                return false;
            }
        }
        return true;
    }
}