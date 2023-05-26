function solution(lottos, win_nums) {
  let count = 0;
  let high = 0;
  let low = 0;
  let black = 0;
  lottos.forEach((win) => {
    win_nums.forEach((num) => {
      if (win === num) {
        count++;
      }
    });
    if (win === 0) {
      black++;
    }
  });
  low = count;
  high = count + black;
  const score = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let result = [];
  result.push(score[high], score[low]);
  return result;
}
