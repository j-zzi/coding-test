function solution(n, m) {
 let arr = [];
  let answer = [];
  for (i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }

  answer.push(Math.max(...arr), (n * m) / Math.max(...arr));
  return answer;
}