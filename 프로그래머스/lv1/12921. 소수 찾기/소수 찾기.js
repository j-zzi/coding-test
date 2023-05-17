function solution(n) {
  let number = new Array(n + 1).fill(1);
  for (i = 2; i < Math.sqrt(n) + 1; i++) {
    if (number[i]) {
      for (j = i ** 2; j <= n; j += i) {
        if (number[j]) {
          number[j] = 0;
        }
      }
    }
  }
  return number.filter((element) => element === 1).length - 2;
}
