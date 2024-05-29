function solution(s) {
  let result = 0;

  const correct = (string) => {
    const stack = [];
    string.forEach((element) => {
      stack.push(element);
      const lastStr = stack.slice(-2).join("");
      if (lastStr === "()" || lastStr === "{}" || lastStr === "[]") {
        stack.splice(-2);
      }
    });
    return !stack[0] ? 1 : 0;
  };

  const pushStr = (string) => {
    const firstStr = string[0];
    string.shift();
    string.push(firstStr);
    return string;
  };

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    result += correct(s);
    pushStr(s);
  }

  return result;
}
