function solution(s) {
    arr = s.split("");
  if (arr.length % 2 === 0) {
    result = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
    return result.join("");
  } else {
    result = arr[Math.floor(arr.length / 2)];
    return String(result);
  }
}