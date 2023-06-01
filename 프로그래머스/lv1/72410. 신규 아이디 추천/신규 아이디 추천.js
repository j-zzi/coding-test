function solution(new_id) {
  const lowId = new_id.toLowerCase();
  let filter = lowId
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.+|\.+$/g, "");

  let filterLength = "";
  if (filter == []) {
    filter = "a";
  }
  if (filter.length > 15) {
    filterLength = filter.slice(0, 15).replace(/^\.+|\.+$/g, "");
    return filterLength;
  } else if (filter.length <= 2) {
    const lastWord = filter[filter.length - 1];
    while (filter.length !== 3) {
      filter += lastWord;
    }
    return filter;
  }
    return filter;
}
