function solution(number, limit, power) {
  const knight = Array(number)
    .fill()
    .map((v, i) => i + 1);
  const measure = [];
  knight.forEach((element) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(element); i++) {
      element % i === 0
        ? i !== Math.sqrt(element)
          ? (count += 2)
          : count++
        : 0;
    }
    measure.push(count);
  });
  measure.forEach((element, index) => {
    if (element > limit) {
      measure[index] = power;
    }
  });
  return measure.reduce((a, c) => a + c, 0);
}
