function solution(price, money, count) {
    multiprice = 0;
  for (i = 1; i <= count; i++) {
    multiprice += price * i;
  }
  if (money > multiprice) {
    return 0;
  } else {
    return multiprice - money;
  }
}
