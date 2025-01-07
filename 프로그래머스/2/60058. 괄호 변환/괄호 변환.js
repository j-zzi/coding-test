function solution(p) {
  if (p.length === 0) {
    return p;
  }
  let left = 0;
  let right = 0;
  let u = "";
  let v = "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      left++;
    } else {
      right++;
    }

    if (left === right) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  const isCorrect = (string) => {
    let left = 0;
    let right = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i] === "(") {
        left++;
      } else {
        right++;
      }

      if (right > left) {
        return false;
      }
    }

    return true;
  };

  if (isCorrect(u)) {
    return u + solution(v);
  }

  const reverse = (string) => {
    return string
      .split("")
      .map((element) => {
        if (element === "(") {
          return ")";
        } else {
          return "(";
        }
      })
      .join("");
  };

  return "(" + solution(v) + ")" + reverse(u.slice(1, -1));
}