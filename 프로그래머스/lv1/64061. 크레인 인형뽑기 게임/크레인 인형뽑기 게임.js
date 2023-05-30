function solution(board, moves) {
  const bucket = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        bucket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (bucket[bucket.length - 2] === bucket[bucket.length - 1]) {
          bucket.splice(bucket.length - 2, 2);
          count += 2;
        }
        break;
      }
    }
  }
  return count;
}
