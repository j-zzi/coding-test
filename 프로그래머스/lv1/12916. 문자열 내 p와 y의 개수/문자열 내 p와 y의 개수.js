function solution(s){
let findP = s.split("P");
  let findp = s.split("p");
  countP = findP.length + findp.length - 2;
  let findY = s.split("Y");
  let findy = s.split("y");
  countY = findY.length + findy.length - 2;
  if (countY !== countP) {
    return false;
  } else {
    return true;
  }
}