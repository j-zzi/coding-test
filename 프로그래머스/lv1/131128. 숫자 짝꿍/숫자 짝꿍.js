function solution(X, Y) {
  const result = [];
  const a = new Array(10).fill(0);
  const b = new Array(10).fill(0);

  X.split("").forEach((element) => {
    a[element]++;
  });
  Y.split("").forEach((element) => {
    b[element]++;
  });
  for (let i = 0; i < 10; i++) {
    const n = Math.min(a[i], b[i]);
    for (let j = 0; j < n; j++) {
      result.push(i);
    }
  }
  result.sort((a, b) => b - a);
  if (result[0] == 0) {
    return "0";
  } else if (result.length === 0) {
    return "-1";
  } else {
    return String(result.join(""));
  }
}
