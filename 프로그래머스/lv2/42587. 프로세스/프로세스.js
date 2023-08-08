function solution(priorities, location) {
  const queue = [];
  const sortQueue = [];

  priorities.forEach((element, index) => {
    queue.push(index);
  });

  while (!sortQueue[priorities.length - 1]) {
    for (let i = 1; i < queue.length; i++) {
      if (priorities[queue[0]] < priorities[queue[i]]) {
        const first = queue[0];
        queue.shift();
        queue.push(first);
        break;
      }

      if (i === queue.length - 1) {
        const first = queue[0];
        queue.shift();
        sortQueue.push(first);
      }

      if (queue.length === 1) {
        sortQueue.push(queue[0]);
      }
    }
  }

  return sortQueue.indexOf(location) + 1;
}