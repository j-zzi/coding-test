function solution(n, arr1, arr2) {
  let twoArr1 = [];
  let twoArr2 = [];
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    twoArr1.push(arr1[i].toString(2).split(""));
    twoArr2.push(arr2[i].toString(2).split(""));
  }
  twoArr1.forEach((element, index) => {
    while (element.length !== n) {
      twoArr1[index].unshift("0");
    }
  });
  twoArr2.forEach((element, index) => {
    while (element.length !== n) {
      twoArr2[index].unshift("0");
    }
  });

  for (i = 0; i < n; i++) {
    result[i] = [];
    for (j = 0; j < n; j++) {
      if (twoArr1[i][j] === "1" || twoArr2[i][j] === "1") {
        result[i].push("#");
      } else {
        result[i].push(" ");
      }
    }
    result[i] = result[i].join("");
  }
  return result;
}