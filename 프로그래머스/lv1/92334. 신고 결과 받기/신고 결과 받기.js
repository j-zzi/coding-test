function solution(id_list, report, k) {
  const result = new Array();

  const initCount = (id_list) => {
    const sendingCount = new Object();
    for (const id of id_list) {
      sendingCount[id] = 0;
    }

    return sendingCount;
  };

  const createReportList = (report) => {
    const reportList = new Object();

    for (const value of report) {
      const accuser = value.split(" ")[0];
      const accuesed = value.split(" ")[1];

      if (!reportList[accuesed]) {
        reportList[accuesed] = [];
      }
      reportList[accuesed].push(accuser);
    }

    return reportList;
  };

  const selectAccuser = (accuser) => {
    const deleteDuplication = new Set(accuser);
    const reportCount = [...deleteDuplication]?.length;

    if (reportCount >= k) {
      return deleteDuplication;
    } else {
      return false;
    }
  };

  const reportList = createReportList(report);
  const countList = initCount(id_list);

  for (const id of id_list) {
    const accuser = reportList[id];
    const successReport = selectAccuser(accuser);

    if (successReport) {
      for (const id of successReport) {
        countList[id]++;
      }
    }
  }

  for (const count in countList) {
    result.push(countList[count]);
  }

  return result;
}