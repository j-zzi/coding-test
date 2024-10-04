function solution(nums) {
  const set = new Set(nums);
  const arr = [...set];
  if (nums.length / 2 > arr.length) {
    return arr.length;
  } else {
    return nums.length / 2;
  }
}