function solution(elements) {
  const addNumbers = (numbers) => {
    const doubleNum = numbers.concat(numbers);
    const addCollection = new Set();
    for (let i = 1; i < numbers.length; i++) {
      for (let j = 0; j <= numbers.length; j++) {
        const sliceNum = doubleNum.slice(j, j + i);
        const addNum = sliceNum.reduce((acc, cur) => (acc += cur), 0);

        addCollection.add(addNum);
      }
    }
    const sum = numbers.reduce((acc, cur) => (acc += cur), 0);
    addCollection.add(sum);

    return addCollection;
  };
  const addCollection = addNumbers(elements);

  return addCollection.size;
}
