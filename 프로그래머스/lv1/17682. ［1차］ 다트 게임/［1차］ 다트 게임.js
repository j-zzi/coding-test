function solution(dartResult) {
  const pattern = /(\d+[SDT][*#]?)/g;
  const arr = dartResult.match(pattern);
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] / 1) count += arr[i][j] / 1;
      if (arr[i][j] == 1 && arr[i][j + 1] == 0) count += 9;
      switch (arr[i][j]) {
        case "S":
          count = count ** 1;
          break;
        case "D":
          count = count ** 2;
          break;
        case "T":
          count = count ** 3;
          break;
        case "*":
          count = count * 2;
          if (i !== 0) result[i - 1] = result[i - 1] * 2;
          break;
        case "#":
          count = count * -1;
          break;
      }
    }
    result.push(count);
  }
  return result.reduce((a, c) => a + c, 0);
}

