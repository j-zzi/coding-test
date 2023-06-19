function solution(brown, yellow) {
  const getMeasureYellow = (yellow) => {
    const measureYellow = new Object();
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
      yellow % i === 0 ? (measureYellow[i] = yellow / i) : 0;
    }
    return measureYellow;
  };

  const selectProcession = (brown, measureYellow) => {
    for (const rowYellow in measureYellow) {
      const makeBrown = (measureYellow[rowYellow] + 2) * 2 + rowYellow * 2;
      if (makeBrown === brown) {
        return [measureYellow[rowYellow] + 2, rowYellow / 1 + 2];
      }
    }
  };

  const measureYellow = getMeasureYellow(yellow);

  return selectProcession(brown, measureYellow);
}
