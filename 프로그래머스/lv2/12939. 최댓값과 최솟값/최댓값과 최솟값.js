function solution(s) {
  const arrNum = s.split(" ");
  const result = [];

  for (let i = 0; i < arrNum.length; i++) {
    arrNum[i] = arrNum[i] / 1;
  }

  result.push(Math.min(...arrNum), Math.max(...arrNum));

  return result.join(" ");
}
