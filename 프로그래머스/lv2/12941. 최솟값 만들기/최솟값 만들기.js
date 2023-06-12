function solution(A, B) {
  const AOrderByAsc = A.sort((a, b) => a - b);
  const BOrderByDesc = B.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += AOrderByAsc[i] * BOrderByDesc[i];
  }

  return result;
}
