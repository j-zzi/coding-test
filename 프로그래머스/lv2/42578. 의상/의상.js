function solution(clothes) {
  const clothesObj = new Object();
  const numbers = [];

  clothes.forEach((element) => {
    const clothesPart = element[1];

    if (clothesObj[clothesPart]) {
      clothesObj[clothesPart] += 1;
    } else {
      clothesObj[clothesPart] = 2;
    }
  });

  for (const clothe in clothesObj) {
    numbers.push(clothesObj[clothe]);
  }

  return numbers.reduce((total, val) => total * val) - 1;
}