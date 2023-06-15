function solution(n) {
  let countOneN = 0;
  let countNextNum = 0;
  const binaryN = n.toString(2).split("");

  for (const value of binaryN) {
    if (value == 1) {
      countOneN++;
    }
  }

  while (countOneN !== countNextNum) {
    const nextNum = n + 1;
    const binaryNextNum = nextNum.toString(2).split("");
    countNextNum = 0;
    for (const value of binaryNextNum) {
      if (value == 1) {
        countNextNum++;
      }
    }
    n++;
  }
  return n;
}
