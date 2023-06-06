const createTermsObj = (terms) => {
  const termsObj = new Object();
  const regex = /([A-Za-z]+)|(\d+)/g;

  for (const term of terms) {
    const type = term.match(regex)[0];
    const period = term.match(regex)[1];

    termsObj[type] = period;
  }

  return termsObj;
};

const createPrivaciesObj = (privacies) => {
  const privaciesObj = new Object();
  const regex = /(\d{4}\.\d{2}\.\d{2})\s(.+)/;
  let number = 1;

  for (const privacie of privacies) {
    const type = privacie.match(regex)[2];
    const startDate = privacie.match(regex)[1].split(".");

    privaciesObj[number] = [type, startDate];
    number++;
  }

  return privaciesObj;
};

const getExpirationPeriod = (termsObj, privaciesObj) => {
  const expirationPeriodObj = new Object();
  for (const number in privaciesObj) {
    const type = privaciesObj[number][0];
    const sumMonth = privaciesObj[number][1][1] / 1 + termsObj[type] / 1;
    const day = privaciesObj[number][1][2] / 1;
    let year = privaciesObj[number][1][0] / 1 + parseInt(sumMonth / 12);
    let month = sumMonth % 12;

    if (month === 0) {
      month = 12;
      year -= 1;
    }
    expirationPeriodObj[number] = [year, month, day];
  }

  return expirationPeriodObj;
};

function solution(today, terms, privacies) {
  const termsObj = createTermsObj(terms);
  const privaciesObj = createPrivaciesObj(privacies);
  const expirationPeriodObj = getExpirationPeriod(termsObj, privaciesObj);
  const compareToday = new Date(today);
  const result = [];

  for (const number in expirationPeriodObj) {
    const date = new Date(expirationPeriodObj[number]);

    date <= compareToday ? result.push(number / 1) : 0;
  }

  return result;
}

