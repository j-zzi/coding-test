import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;

        for (String skillTree : skill_trees) {
            List<Integer> skillIndexList = Arrays.stream(skillTree.split(""))
                    .map(skill::indexOf)
                    .filter(index -> index > -1)
                    .collect(Collectors.toList());

            if(isValidSkillOrder(skillIndexList)) answer++;
        }
        return answer;
    }

    private boolean isValidSkillOrder(List<Integer> skillList) {
        for (int i = 0; i < skillList.size(); i++) {
            if (skillList.get(i) != i) {
                return false;
            }
        }
        return true;
    }
}