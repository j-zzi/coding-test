function solution(n) {
  const townNum = [0];
  let i = 1;
  while (!townNum[n]) {
    if (i % 3 !== 0) {
      const position = String(i).indexOf(3);
      if (position === -1) {
        townNum.push(i);
      }
    }
    i++;
  }
  return townNum[n];
}
