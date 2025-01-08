function solution(rows, columns, queries) {
  const arr = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );

  const answer = [];

  for (const [x1, y1, x2, y2] of queries) {
    const startRow = x1 - 1;
    const startCol = y1 - 1;
    const endRow = x2 - 1;
    const endCol = y2 - 1;

    let min = arr[startRow][startCol];
    let prev = arr[startRow][startCol];

    for (let col = startCol + 1; col <= endCol; col++) {
      [arr[startRow][col], prev] = [prev, arr[startRow][col]];
      min = Math.min(min, prev);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      [arr[row][endCol], prev] = [prev, arr[row][endCol]];
      min = Math.min(min, prev);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      [arr[endRow][col], prev] = [prev, arr[endRow][col]];
      min = Math.min(min, prev);
    }
    for (let row = endRow - 1; row >= startRow; row--) {
      [arr[row][startCol], prev] = [prev, arr[row][startCol]];
      min = Math.min(min, prev);
    }

    answer.push(min);
  }

  return answer;
}