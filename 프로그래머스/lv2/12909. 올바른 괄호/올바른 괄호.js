function solution(s) {
  const arr = s.split("");
  const stack = [];
  for (const value of arr) {
    stack.push(value);

    if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
      stack.splice(-2);
    }
  }

  return !stack[0];
}
