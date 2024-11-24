function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratio = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .forEach((weight) => {
      ratio.forEach((r) => {
        if (map.has(weight * r)) answer += map.get(weight * r);
      });
      map.set(weight, (map.get(weight) || 0) + 1);
    });

  return answer;
}