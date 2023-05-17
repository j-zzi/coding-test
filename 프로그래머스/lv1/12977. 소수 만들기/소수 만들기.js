function solution(nums) {
  const arr = getCombinations(nums, 3);
  let sum = [];
  let result = 0;
  arr.forEach((element, idx) => {
    sum[idx] = element.reduce((acc, cur) => {
      return (acc += cur);
    });
  });
  for (i = 0; i < sum.length; i++) {
    let count = 0;
    for (j = 1; j <= Math.sqrt(sum[i]); j++) {
      if (sum[i] % j === 0) {
        count++;
      }
    }
    if (count === 1) {
      result++;
    }
  }
  return result;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};