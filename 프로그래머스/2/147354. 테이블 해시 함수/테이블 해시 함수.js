function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }

    return a[col - 1] - b[col - 1];
  });

  let s = 0;

  for (let i = row_begin - 1; i < row_end; i++) {
    const sum = data[i].reduce((acc, cur) => {
      return acc + (cur % (i + 1));
    }, 0);

    s = s ^ sum;
  }

  return s;
}
