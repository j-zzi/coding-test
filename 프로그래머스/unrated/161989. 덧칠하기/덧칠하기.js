
function solution(n, m, section) {
  let arr = Array(n).fill(1);
  let count = 0;
  section.forEach((element) => {
    arr[element - 1] = 0;
  });
  while (arr.indexOf(0) !== -1) {
    arr.forEach((element, index) => {
      if (element === 0) {
        for (i = index; i < index + m; i++) {
          arr[i] = 1;
        }
        count++;
      }
    });
  }
  return count;
}
