function solution(arr1, arr2) {
  const result = Array.from(
    Array(arr1.length),
    () => new Array(arr2[0].length)
  );
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let m = 0; m < arr1[0].length; m++) {
        sum += arr1[i][m] * arr2[m][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}