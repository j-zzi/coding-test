function solution(n) {
  let electric = 0;
  while (n !== 1) {
    if (n % 2 !== 0) {
      electric++;
      n = parseInt(n / 2);
    } else {
      n = n / 2;
    }
  }
  return electric + 1;
}
