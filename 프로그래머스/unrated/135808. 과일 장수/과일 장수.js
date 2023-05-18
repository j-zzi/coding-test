function solution(k, m, score) {
  let arr = [];
  let result = 0;
  score.sort((a, b) => b - a).unshift(0);
  for (i = 1; i < score.length - m + 1; i += m) {
    arr.push(score.slice(i, i + m));
  }
  for (i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i]) * m;
  }
  return result;
}