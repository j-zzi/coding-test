function solution(n) {
  let sequence = [0, 1];

  for (let i = 0; sequence.length <= n; i++) {
    sequence.push(sequence.slice(-2).reduce((acc, cur) => acc + cur, 0)%1234567);
  }
  return sequence[n];
}
