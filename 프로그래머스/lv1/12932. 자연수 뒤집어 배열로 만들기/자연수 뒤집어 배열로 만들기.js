function solution(n) {
   num = String(n);
  arrNum = num.split("");
  reverseNum = arrNum.map(Number).reverse();
  return reverseNum;
}