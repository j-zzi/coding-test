function solution(people, limit) {
  const roop = people.length;
  let count = 0;

  people.sort((a, b) => a - b);

  for (let i = 0; i < roop; i++) {
    const lightest = people[0];
    const heaviest = people.at(-1);

    if (lightest + heaviest > limit) {
      people.pop();
    } else if (lightest + heaviest <= limit) {
      people.shift();
      people.pop();
    } else {
      return count;
    }
    count++;
  }

  return count;
}
