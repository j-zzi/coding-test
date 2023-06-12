function solution(s) {
  let arr = s.split(" ");
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(
        arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase()
      );
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
}
