function solution(strings, n) {
     const result = strings.sort((a, b) => {
    if (a.charCodeAt(n) === b.charCodeAt(n)) {
      return a > b ? 1 : -1;
    } else {
      return a.charCodeAt(n) - b.charCodeAt(n);
    }
  });
  return result;
}