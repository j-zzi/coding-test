function solution(arr, divisor) {
   let answer = [];
  arr.forEach(function (number) {
    if (number % divisor === 0) {
      answer.push(number);
    }
  });
  if (!answer[0]) {
    answer.push(-1);
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}