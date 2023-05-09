function solution(array, commands) {
    let arr = [];
  let result = 0;
  for (i = 0; i < commands.length; i++) {
    result = array
        .slice(commands[i][0] - 1, commands[i][1])
        .sort((a, b) => {
      return a - b;
    })[commands[i][2] - 1];
    arr.push(result);
  }
  return arr;
}