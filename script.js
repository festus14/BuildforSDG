const getRadioValue = () => {
  for (let elem in periodType) {
    if (periodType[elem].checked) return periodType[elem].value;
  }
};

const getInputData = () => {
  const data = {};
  data.populationValue = population.value;
  data.timeToElapseValue = timeToElapse.value;
  data.reportedCasesValue = reportedCases.value;
  data.totalHospitalBedsValue = totalHospitalBeds.value;
  data.periodTypeValue = getRadioValue();
  return data;
};
