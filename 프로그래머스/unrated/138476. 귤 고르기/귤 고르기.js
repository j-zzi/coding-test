function solution(k, tangerine) {
  const countSize = [];
  let conditionNum = 0;

  for (const size of tangerine) {
    if (!countSize[size]) {
      countSize[size] = 1;
    } else {
      countSize[size]++;
    }
  }

  countSize.sort((a, b) => b - a);
  const size = countSize.filter((element) => {
    return element !== undefined;
  });

  console.log(size);

  for (const count of size) {
    k -= count;
    conditionNum++;
    if (k <= 0) {
      return conditionNum;
    }
  }

  return conditionNum;
}
