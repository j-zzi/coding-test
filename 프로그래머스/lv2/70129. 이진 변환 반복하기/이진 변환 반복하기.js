function solution(s) {
  let times = 0;
  let deleteZeroCount = 0;

  while (s !== "1") {
    const preLength = s.length;

    s = s.replaceAll("0", "");
    deleteZeroCount += preLength - s.length;
    s = s.length.toString(2);

    times++;
  }

  const result = [times, deleteZeroCount];

  return result;
}
