function solution(s, n) {
    let asci = 0;
  let arr = [];
  for (i = 0; i < s.length; i++) {
      if (s[i] === " ") {
      arr.push(" ");
      continue;
    }
    asci = s.charCodeAt(i) + n;
    if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
      if (asci > 90) {
        asci -= 26;
        arr.push(String.fromCharCode(asci));
      } else {
        arr.push(String.fromCharCode(asci));
      }
    } else {
      if (asci > 122) {
        asci -= 26;
        arr.push(String.fromCharCode(asci));
      } else {
        arr.push(String.fromCharCode(asci));
      }
    }
  }

  return arr.join("").replaceAll("8", " ");
}