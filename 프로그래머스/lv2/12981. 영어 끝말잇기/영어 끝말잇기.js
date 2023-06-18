function solution(n, words) {
  const spokenWords = [];

  const compareWord = (previousWord, presentWord) => {
    const firstSpell = presentWord[0];
    const lastSpell = previousWord[previousWord.length - 1];

    return firstSpell === lastSpell ? 1 : 0;
  };

  const searchSameWord = (spokenWords, word) => {
    return spokenWords.indexOf(word) !== -1 ? 1 : 0;
  };

  for (const word of words) {
    const dropOut = (spokenWords.length % n) + 1;
    const cycle = parseInt((spokenWords.length + n) / n);
    const isSame = compareWord(spokenWords.at(-1) || 0, word);

    if (!spokenWords[0] || isSame) {
      const alreadySpoken = searchSameWord(spokenWords, word);

      if (alreadySpoken) {
        return [dropOut, cycle];
      }

      spokenWords.push(word);
    } else {
      return [dropOut, cycle];
    }
  }
  return [0,0];
}
