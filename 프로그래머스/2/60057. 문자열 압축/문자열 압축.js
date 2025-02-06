function solution(s) {
  if (s.length === 1) return 1;

  let min = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const compressed = getCompressedStr(s, i);
    min = Math.min(min, compressed.length);
  }
  return min;
}

function getCompressedStr(s, n) {
  const compressedStr = [];
  const stack = [];
  stack.push(s.slice(0, n));

  let count = 1;
  let index = n;

  while (index <= s.length) {
    const sliceStr = s.slice(index, index + n);

    if (stack[0] === sliceStr) {
      count++;
    } else {
      compressedStr.push(count > 1 ? count : "", stack.pop());
      if (sliceStr) {
        stack.push(sliceStr);
        count = 1;
      }
    }
    index += n;
  }

  if (stack.length > 0) {
    compressedStr.push(count > 1 ? count : "", stack.pop());
  }

  return compressedStr.join("");
}