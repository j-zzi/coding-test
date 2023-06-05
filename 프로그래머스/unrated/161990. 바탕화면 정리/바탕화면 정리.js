function solution(wallpaper) {
  const filesPosition = {
    row: [],
    col: [],
  };
  const result = new Array();

  const insertFilesPosition = (wallpaper) => {
    for (const [rowIndex, row] of wallpaper.entries()) {
      for (const [colIndex, col] of [...row].entries()) {
        if (col === "#") {
          filesPosition["row"].push(rowIndex);
          filesPosition["col"].push(colIndex);
        }
      }
    }
  };

  const insertOuterPosition = (filesPosition) => {
    result[0] = Math.min(...filesPosition["row"]);
    result[1] = Math.min(...filesPosition["col"]);
    result[2] = Math.max(...filesPosition["row"])+1;
    result[3] = Math.max(...filesPosition["col"])+1;
  };

  insertFilesPosition(wallpaper);
  insertOuterPosition(filesPosition);

  return result;
}
