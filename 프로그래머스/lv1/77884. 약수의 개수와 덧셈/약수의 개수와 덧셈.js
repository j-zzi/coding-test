function divisorCount(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i * i === n) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

function solution(left, right) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = left; i <= right; i++) {
    const count = divisorCount(i);
    if (count % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return evenSum - oddSum;
}