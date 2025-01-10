function solution(places) {
  const answer = [];

  for (let i = 0; i < places.length; i++) {
    answer.push(bfs(places[i]));
  }

  return answer;
}

function bfs(place) {
  const map = place.map((position) => position.split(""));
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  const getPersonPosition = () => {
    const personPosition = [];
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "P") {
          personPosition.push([i, j]);
        }
      }
    }

    return personPosition;
  };

  const queue = getPersonPosition();

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= map[0].length || ny < 0 || ny >= map.length) continue;
      if (map[ny][nx] === "X") continue;
      if (map[ny][nx] === "P") return 0;

      for (let j = 0; j < 4; j++) {
        const mx = nx + dx[j];
        const my = ny + dy[j];

        if (mx === x && my === y) continue;
        if (mx < 0 || mx >= map[0].length || my < 0 || my >= map.length)
          continue;
        if (map[my][mx] === "P") return 0;
      }
    }
  }

  return 1;
}