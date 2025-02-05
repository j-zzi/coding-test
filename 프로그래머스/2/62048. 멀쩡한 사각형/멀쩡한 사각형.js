function solution(w, h) {
  const gcd = getGcd(w, h);
  const answer = w * h - (w + h - gcd);
  return answer;
}

function getGcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}