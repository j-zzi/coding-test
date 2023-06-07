function solution(park, routes) {
  const directions = ["N", "E", "S", "W"];
  let pos = [];
  park.forEach((element, index) => {
    const initPos = element.indexOf("S");
    if (initPos !== -1) {
      pos = [index, initPos];
    }
  });
  const getPos = (pos, dir) => {
    const d = directions.indexOf(dir);
    const nextPos = [
      pos[0] + (d === 0 ? -1 : d === 2 ? 1 : 0),
      pos[1] + (d === 1 ? 1 : d === 3 ? -1 : 0),
    ];
    return nextPos;
  };
  const canMove = (pos, nextPos) => {
    if (
      nextPos[0] < 0 ||
      nextPos[0] >= park.length ||
      nextPos[1] < 0 ||
      nextPos[1] >= park[0].length ||
      park[nextPos[0]][nextPos[1]] === "X"
    ) {
      return false;
    }
    return true;
  };
  for (let i = 0; i < routes.length; i++) {
    const [dir, steps] = routes[i].split(" ");
    const save = pos;
    for (let j = 0; j < steps; j++) {
      const nextPos = getPos(pos, dir);
      console.log(pos, nextPos, canMove(pos, nextPos));
      if (!canMove(pos, nextPos)) {
        pos = save;
        break;
      }
      pos = nextPos;
    }
  }
  return pos;
}
