function solution(name, yearning, photo) {
  let year = new Map();
  for (i = 0; i < name.length; i++) {
    year.set(name[i], yearning[i]);
  }
  return photo.map((names) =>
    names.reduce((result, n) => result + (year.get(n) || 0), 0)
  );
}