function solution(k, score) {
  let result = [];
  let pride = [];
  score.forEach((element, index) => {
    if (index <= k - 1) {
      result.push(element);
    } else {
      result.push(element);
      result.sort((a, b) => a - b);
      result.shift();
    }
    pride.push(Math.min(...result))
  });
  return pride
}