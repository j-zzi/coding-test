function solution(x) {
    let num = String(x).split("");
  let i = 0;
  let result = 0;
  while (i < num.length) {
    result += Number(num[i]);
    i++;
  }
  if (x % result === 0) return true;
  else return false;
}