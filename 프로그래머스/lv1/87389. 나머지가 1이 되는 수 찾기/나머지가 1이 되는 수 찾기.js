function solution(n) {
  a = 1;
  while (1) {
    a++;
    if (n % a === 1) {
      return a;
    }
  }
}