function solution(n, k) {
  let answer = 0;
  const binary = n.toString(k);

  const discriminateDemical = (binary) => {
    if (binary == 2) {
      return true;
    }
    if (binary == 1) {
      return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(binary)); i++) {
      if (binary % i === 0) {
        return false;
      }
    }
    return true;
  };

  const splitZero = binary.split("0");

  for (let i = 0; i < splitZero.length; i++) {
    if (!splitZero[i]) {
      continue;
    }
    const isDemical = discriminateDemical(splitZero[i]);
    if (isDemical) {
      answer++;
    }
  }

  return answer;
}