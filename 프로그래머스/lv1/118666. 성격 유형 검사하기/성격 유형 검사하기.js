function solution(survey, choices) {
  const categories = {
    RT: 0,
    CF: 0,
    JM: 0,
    AN: 0,
  };

  survey.forEach((element, index) => {
    const surveyScore = reverseSurveyScore(element, choices[index]);
    const category = surveyScore[0];
    const categoryScore = surveyScore[1];

    addSurveyScore(categories, category, categoryScore);
  });

  return selectCategory(categories).join("");
}

function selectCategory(categories) {
  const result = [];

  for (const survey in categories) {
    if (categories[survey] > 0) {
      result.push(survey[1]);
    } else {
      result.push(survey[0]);
    }
  }

  return result;
}

function addSurveyScore(categories, category, score) {
  categories[`${category}`] += score;

  return categories;
}
function reverseSurveyScore(survey, choice) {
  const scores = {
    1: -3,
    2: -2,
    3: -1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  const sortSurvey = survey.split("").sort().join("");
  const surveyScore = [];

  if (sortSurvey !== survey) {
    surveyScore.push(sortSurvey, scores[choice] * -1);
  } else {
    surveyScore.push(survey, scores[choice]);
  }
  return surveyScore;
}
