function solution(N, stages) {
  const sum = stages.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});
  for (i = 1; i <= N; i++) {
    let count = 0;
    for (const keys in sum) {
      if (i <= keys) count += sum[keys];
    }
    if (!sum[`${i}`]) sum[`${i}`] = 0;
    sum[i] = sum[`${i}`] / count;
  }
  const arr = Object.entries(sum).sort(([, a], [, b]) => b - a);
  const result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] > N) continue;
    result.push(arr[i][0] / 1);
  }
  return result;
}