function solution(phone_number) {
    const hidden = phone_number.length - 4;
  const hiddenNum = "*".repeat(hidden);
  return hiddenNum + phone_number.slice(-4);
}