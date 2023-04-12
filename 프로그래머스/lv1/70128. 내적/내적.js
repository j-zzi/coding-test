function solution(a, b) {
    let n = a.length;
  let result = 0;
  for (i = 0; i < n; i++) {
    result += a[i] * b[i];
  }

  return result;
}