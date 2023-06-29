function solution(n) {
  const fibonacci = [1, 1];
  while (!fibonacci[n]) {
    const lastNum = fibonacci.slice(-2);
    const nextNum = lastNum.reduce((acc, cur) => acc + cur, 0) % 1234567;
    fibonacci.push(nextNum);
  }
  return fibonacci[n];
}
