function solution(s, skip, index) {
  let spell = "abcdefghijklmnopqrstuvwxyz";
  const regex = new RegExp(`[${skip}]`, "g");
  const skipSpell = spell.replace(regex, "");
  const result = [];
  s.split("").forEach((element) => {
    let position = (skipSpell.indexOf(element) + index) % skipSpell.length;
    result.push(skipSpell[position]);
  });
  return result.join("");
}
