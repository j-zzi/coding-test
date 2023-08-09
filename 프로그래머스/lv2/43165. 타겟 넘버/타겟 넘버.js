function solution(numbers, target) {
  let answer = 0;

  const dfs = (sum, n, numbers, target) => {
    if (n === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(sum + numbers[n], n + 1, numbers, target);
    dfs(sum - numbers[n], n + 1, numbers, target);
  };

  dfs(0, 0, numbers, target);

  return answer;
}