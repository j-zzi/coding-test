function solution(sizes) {
   let width = [];
  let height = [];
  for (i = 0; i < sizes.length; i++) {
    width.push(Math.max(...sizes[i]));
    height.push(Math.min(...sizes[i]));
  }
  return Math.max(...width) * Math.max(...height);
}