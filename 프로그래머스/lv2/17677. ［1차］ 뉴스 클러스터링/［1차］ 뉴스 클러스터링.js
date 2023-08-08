function solution(str1, str2) {
  str1 = str1
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, " ")
    .split(/\s+/);
  str2 = str2
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, " ")
    .split(/\s+/);

  const sliceString = (string) => {
    const sliceStr = [];
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string[i].length; j++) {
        const twoStr = string[i].slice(j, j + 2);
        if (twoStr[1]) {
          sliceStr.push(twoStr);
        }
      }
    }
    return sliceStr;
  };

  sliceStr1 = sliceString(str1);
  sliceStr2 = sliceString(str2);

  let intersection = 0;

  sliceStr1.forEach((element) => {
    if (sliceStr2.includes(element)) {
      sliceStr2.splice(sliceStr2.indexOf(element), 1);
      intersection++;
    }
  });

  const union = sliceStr1.length + sliceStr2.length;
  const similarity = Math.floor((intersection / union) * 65536);

  if (union === 0 && intersection === 0) {
    return 65536;
  }
  return similarity;
}