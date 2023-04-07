function solution(a, b) {
    const min = Math.min(a, b);
  const max = Math.max(a, b);
  let result = 0;
  if (a === b) {
    return a;
  } else {
    for (i = min; i <= max; i++) {
      result += i;
    }
  }
  return result;
}