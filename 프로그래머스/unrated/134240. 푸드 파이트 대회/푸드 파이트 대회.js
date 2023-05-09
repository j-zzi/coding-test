function solution(food) {
  let result = [];
  let second = [];
  food.forEach((element, index) => {
    if (index !== 0) {
      result.push(String(index).repeat(parseInt(element / 2)));
    }
  });
  second.push(...result);
  second.push(0);
  second.push(...result.reverse());
  return second.join("");
}