function solution(babbling) {
  const answer = ["aya", "ye", "woo", "ma"];
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      babbling[i] = babbling[i].replaceAll(answer[j], j);
    }
  }
  babbling.forEach((element) => {
    for (let i = 0; i < element.length - 1; i++) {
      if (element[i] === element[i + 1]) {
        element = "X";
      }
    }
    if (element / 1 || element == 0) {
      count++;
    }
  });
  return count;
}
