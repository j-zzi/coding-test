function solution(t, p) {
    count = 0
  arr = [];
  for (i = 0; i < t.length - p.length + 1; i++) {
    tSlice = t.slice(i, p.length + i);
    if (tSlice <= p) count++
  }
  return count;
}