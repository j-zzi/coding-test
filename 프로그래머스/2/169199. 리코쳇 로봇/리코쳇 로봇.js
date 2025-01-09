function solution(board) {
  const HEIGHT = board.length;
  const WIDTH = board[0].length;
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: HEIGHT }, () =>
    Array(WIDTH).fill(false)
  );

  const findStartPosition = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === "R") {
          return [i, j];
        }
      }
    }
  };

  const getIsValid = (y, x) => {
    if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT || board[y][x] === "D") {
      return false;
    }
    return true;
  };

  const bfs = (startNode, count) => {
    const queue = [[...startNode, count]];

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (board[curY][curX] === "G") {
        return curCount;
      }

      moves.forEach((move) => {
        const [dy, dx] = move;
        let [ny, nx] = [curY, curX];

        while (getIsValid(ny + dy, nx + dx)) {
          ny += dy;
          nx += dx;
        }

        if (!visited[ny][nx]) {
          visited[ny][nx] = true;
          queue.push([ny, nx, curCount + 1]);
        }
      });
    }
  };

  return bfs(findStartPosition(), 0) ?? -1;
}
