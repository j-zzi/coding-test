function solution(s) {
sol = [];
  result = [];
  arr = s.split(" ");
  for (i = 0; i < arr.length; i++) {
    result[i] = [];
    for (j = 0; j < arr[i].length; j++) {
      indexArr = arr[i].split("");
      if (j % 2 === 0) {
        result[i].push(indexArr[j].toUpperCase());
      } else {
        result[i].push(indexArr[j].toLowerCase());
      }
    }
    sol[i] = result[i].join("");
  }
  return sol.join(" ");
}