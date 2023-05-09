function solution(food) {
  let result = [];
  food.forEach((element, index) => {
    if (index !== 0) {
      result += String(index).repeat(parseInt(element / 2));
    }
  });
  return result + 0 + [...result].reverse().join("");

}