function solution(numbers) {
  let arr = [];
  let result = [];
  arr = getCombinations(numbers, 2);
  arr.forEach((element) => {
    result.push(
      element.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  });
  return result
    .sort((a, b) => {
      return a - b;
    })
    .filter((c, index) => {
      return result.indexOf(c) === index;
    });
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