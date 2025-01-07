function solution(expression) {
  let answer = 0;
  const calculator = (a, b, operator) => {
    switch (operator) {
      case "*":
        return a * b;
      case "+":
        return a + b;
      case "-":
        return a - b;
    }
  };

  const combinations = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  combinations.forEach((combination) => {
    const numbers = expression.match(/[0-9]+/g).map(Number);
    const operators = expression.match(/[\*\-\+]/g);

    combination.forEach((operator) => {
      let index = operators.indexOf(operator);

      while (index != -1) {
        numbers[index] = calculator(
          numbers[index],
          numbers[index + 1],
          operator
        );
        numbers.splice(index + 1, 1);
        operators.splice(index, 1);
        index = operators.indexOf(operator);
      }
    });
    if (answer < Math.abs(numbers[0])) {
      answer = Math.abs(numbers[0]);
    }
  });

  return answer;
}