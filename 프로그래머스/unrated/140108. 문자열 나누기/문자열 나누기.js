function solution(s) {
  let first = 0;
  let same = 0;
  let difference = 0;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[first] === s[i]) {
      same++;
    } else {
      difference++;
    }
    if (same === difference) {
      result.push(s.slice(first, i + 1));
      first = i + 1;
    } else if (i === s.length - 1) {
      result.push(s[i]);
    }
  }
  return result.length;
}
