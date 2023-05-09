function solution(s) {
  let result = [];
  a = s.split("");
  a.unshift("0");
  for (i = 1; i < a.length; i++) {
    if (a.lastIndexOf(a[i], i - 1) !== -1)
      result.push(i - a.lastIndexOf(a[i], i - 1));
    else result.push(a.lastIndexOf(a[i], i - 1));
  }

  return result;
}