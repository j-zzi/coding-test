function solution(number) {
  let count = 0;
  const initialValue = 0;
  result = getCombinations(number, 3);
  for (i = 0; i < result.length; i++) {
    let sum = result[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    if (sum === 0) {
      count++;
    }
  }
  return count;
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
