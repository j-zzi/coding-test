function solution(n) {
    test = Math.sqrt(n);
  if (Number.isInteger(test)) {
    num = test + 1;
    result = num ** 2;
    return result;
  } else {
    return -1;
  }
}