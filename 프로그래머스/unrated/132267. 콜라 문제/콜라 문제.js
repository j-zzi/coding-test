function solution(a, b, n) {
    let gift = 0;
  let count = 0;
  while (n >= a) {
    gift = parseInt(n / a) * b;
    n = gift + (n % a);
    count += gift;
  }
  return count;
}