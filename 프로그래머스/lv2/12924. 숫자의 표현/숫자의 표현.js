function solution(n) {
  let result = 1;
  for (let i = 1; i < n / 2; i++) {
    let sum = 0;
    for (let j = i; j < n / 2 + 1; j++) {
      sum += j;
      if (sum === n) {
        result++;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return result;
}
