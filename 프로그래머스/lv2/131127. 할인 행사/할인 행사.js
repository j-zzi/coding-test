function solution(want, number, discount) {
  const createWantObj = (want, number) => {
    const wantObj = new Map();
    want.forEach((element, index) => {
      wantObj.set(element, number[index]);
    });
    return wantObj;
  };

  let result = 0;

  discount.forEach((discountThing, index) => {
    const wantObj = createWantObj(want, number);
    const sliceDiscount = discount.slice(index, index + 10);

    if (!sliceDiscount[9]) {
      return result;
    }
    sliceDiscount.forEach((element) => {
      const hasDiscount = wantObj.get(element);
      if (hasDiscount) {
        if (hasDiscount - 1 === 0) {
          wantObj.delete(element);
        } else {
          wantObj.set(element, hasDiscount - 1);
        }
      }
    });
    if (wantObj.size === 0) {
      result += 1;
    }
  });
  return result;
}