function solution(ingredient) {
  let result = [];
  let count = 0;
  ingredient.forEach((element) => {
    result.push(element);
    let lastItem = result.slice(-4).join("");

    if (lastItem === "1231") {
      result.splice(-4);
      count++;
    }
  });
  return count;
}
