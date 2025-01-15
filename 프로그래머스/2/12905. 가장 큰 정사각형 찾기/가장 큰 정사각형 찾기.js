function solution(board) {
  const ROWS = board.length;
  const COLS = board[0].length;
  let answer = board[0][0];
  let min = 0;

  for (let i = 1; i < ROWS; i++) {
    for (let j = 1; j < COLS; j++) {
      if (board[i][j]) {
        min = Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]);
        board[i][j] = min + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}
