function solution(s) {
  const sArr = s.split("");
  const stack = [];

  for (const word of sArr) {
    word === stack.at(-1) ? stack.pop() : stack.push(word);
  }
  return stack[0] ? 0 : 1;
}
