function solution(numbers) {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let difference = arr.filter((x) => !numbers.includes(x));
  return difference.reduce((acc, cur, idx) => {
    return (acc += cur);
  }, 0);
}