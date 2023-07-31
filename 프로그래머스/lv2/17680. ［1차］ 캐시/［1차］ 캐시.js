function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  for (let city of cities) {
    city = city.toLowerCase();
    const index = cache.indexOf(city);
    if (index === -1) {
      cache.push(city);
      time += 5;
    } else {
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    }
    if (cache[cacheSize]) {
      cache.shift();
    }
  }

  return time;
}