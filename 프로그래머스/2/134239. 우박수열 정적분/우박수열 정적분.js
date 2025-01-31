function getCollatzSequence(k) {
  const sequence = [k];
  while (k !== 1) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = k * 3 + 1;
    }
    sequence.push(k);
  }
  return sequence;
}

function solution(k, ranges) {
  const sequence = getCollatzSequence(k);
  const n = sequence.length - 1;

  const prefixSum = [0];
  for (let i = 0; i < n; i++) {
    const area = (sequence[i] + sequence[i + 1]) / 2;
    prefixSum.push(prefixSum[i] + area);
  }

  return ranges.map(([a, b]) => {
    const from = a;
    const to = n + b;

    if (from > to) return -1;

    return prefixSum[to] - prefixSum[from];
  });
}