
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  const map = new Map();
  participant.forEach((element, index) => {
    map.set(element, completion[index]);
  });
  for (let i = 0; i < participant.length; i++) {
    if (map.get(participant[i]) !== participant[i]) {
      return participant[i];
    }
  }
}
