function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i + 1) {
      for (let j = 1; j <= citations.length; j++) {
        if (i < citations[i] + j) {
          return citations[i] + j - 1;
        }
      }
    }
  }
  return citations.length;
}
