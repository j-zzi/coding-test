function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  let oneCount = 0;
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  let twoCount = 0;
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let threeCount = 0;
  let scores = [];
  let result = [];
  answers.map((element, index) => {
    if (element === one[index % one.length]) {
      oneCount++;
    }
    if (element === two[index % two.length]) {
      twoCount++;
    }
    if (element === three[index % three.length]) {
      threeCount++;
    }
  });
  scores.push(oneCount, twoCount, threeCount);

  scores.forEach((element, index) => {
    if (element === Math.max(...scores)) {
      result.push(index + 1);
    }
  });
  return result;
}