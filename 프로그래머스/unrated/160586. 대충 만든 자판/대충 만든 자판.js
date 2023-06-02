function solution(keymap, targets) {
  const result = [];
  targets.forEach((nums, index) => {
    result[index] = [];
    const number = nums.split("");
    number.forEach((num) => {
      const count = [];
      keymap.forEach((key) => {
        if (key.indexOf(num) !== -1) {
          count.push(key.indexOf(num) + 1);
        }
      });
      result[index].push(Math.min(...count));
    });
    if (result[index].indexOf(Infinity) !== -1) {
      result[index] = -1;
    } else {
      result[index] = result[index].reduce((a, c) => a + c, 0);
    }
  });
  return result;
}
