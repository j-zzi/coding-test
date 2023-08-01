function solution(clothes) {
  const clothesObj = new Object();
  let result = 1;
  clothes.forEach((element) => {
    const clothesPart = element[1];

    if (clothesObj[clothesPart]) {
      clothesObj[clothesPart] += 1;
    } else {
      clothesObj[clothesPart] = 2;
    }
  });

  for (const clothe in clothesObj) {
    result *= clothesObj[clothe];
  }

  return result - 1;
}