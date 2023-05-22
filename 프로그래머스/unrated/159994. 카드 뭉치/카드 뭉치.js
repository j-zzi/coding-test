function solution(cards1, cards2, goal) {
  let result = [];
  for (i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      result.push(cards1[0]);
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      result.push(cards2[0]);
      cards2.shift();
    } else return "No";
    if (result.length === goal.length) {
      return "Yes";
    }
  }
}