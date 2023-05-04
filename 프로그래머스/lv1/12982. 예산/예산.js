function solution(d, budget) {
  let result = 0;
  arr = d.sort(function (a, b) {
    return a - b;
  });
  for (i = 0; i < d.length; i++) {
    result += arr[i];
    if (result > budget) {
      return i;
    }
  }
  if (result <= budget) return d.length;
}