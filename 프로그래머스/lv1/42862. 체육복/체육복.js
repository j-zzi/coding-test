function solution(n, lost, reserve) {
  const students = new Array(n + 1).fill(1);
  let count = -1;
  lost.forEach((element) => {
    students[element] -= 1;
  });
  reserve.forEach((element) => {
    students[element] += 1;
  });
  students.forEach((element, index) => {
    if (element === 0 && students[index - 1] === 2) {
      students[index - 1]--;
      students[index]++;
    } else if (element === 0 && students[index + 1] === 2) {
      students[index + 1]--;
      students[index]++;
    }
  });
  students.forEach((element) => {
    if (element > 0) {
      count++;
    }
  });
  return count;
}
