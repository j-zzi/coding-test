function solution(m, musicinfos) {
  let answer = "(None)";

  const map = new Map();

  m = convertSharpToAlpha(m);

  musicinfos.forEach((musicInfo) => {
    const splitMusicInfo = musicInfo.split(",");

    const startTime = splitMusicInfo[0].split(":");
    const endTime = splitMusicInfo[1].split(":");

    const startMinute = startTime[0] * 60 + startTime[1] / 1;
    const endMinute = endTime[0] * 60 + endTime[1] / 1;

    const time = endMinute - startMinute;
    const title = splitMusicInfo[2];

    const convertCode = convertSharpToAlpha(splitMusicInfo[3]);

    let code = "";

    while (code.length != time) {
      for (const char of convertCode) {
        if (code.length == time) {
          break;
        }
        code += char;
      }
    }

    map.set(title, [code, time]);
  });

  let longTime = 0;

  for (const [key, value] of map) {
    if (value[0].includes(m)) {
      if (longTime < value[1]) {
        answer = key;
        longTime = value[1];
      }
    }
  }

  return answer;
}

function convertSharpToAlpha(code) {
  code = code.replaceAll("A#", "H");
  code = code.replaceAll("G#", "I");
  code = code.replaceAll("F#", "J");
  code = code.replaceAll("D#", "K");
  code = code.replaceAll("C#", "L");
  code = code.replaceAll("B#", "M");
  code = code.replaceAll("E#", "N");

  return code;
}