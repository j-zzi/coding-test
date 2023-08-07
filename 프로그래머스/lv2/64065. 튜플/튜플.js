function solution(s) {
    const result = [];
  let arr = s.slice(2, s.length - 2).split("},{");

  arr.forEach((element, index) => {
    arr[index] = element.split(",").map((element) => Number(element));
  });

  arr.sort((a, b) => a.length - b.length);

  arr.forEach((array) => {
    array.forEach((number) => {
      if (!result.includes(number)) {
        result.push(number);
      }
    });
  });

  return result;
}