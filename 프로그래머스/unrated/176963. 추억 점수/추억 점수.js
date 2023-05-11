function solution(name, yearning, photo) {
  let match = new Map();
  let sum = 0;
  let result = [];
  for (i = 0; i < name.length; i++) {
    match.set(name[i], yearning[i]);
  }
  for (i = 0; i < photo.length; i++) {
    for (j = 0; j < photo[i].length; j++) {
      if (match.get(photo[i][j])) sum += match.get(photo[i][j]);
    }
    result.push(sum);
    sum = 0;
  }
  return result;
}