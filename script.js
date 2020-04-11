const getRadioValue = () => {
  for (let elem in periodTypes) {
    if (periodTypes[elem].checked) return periodTypes[elem].value;
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
