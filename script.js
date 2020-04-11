const getInputData = () => {
  const data = {};
  data.populationValue = population.value;
  data.timeToElapseValue = timeToElapse.value;
  data.reportedCasesValue = reportedCases.value;
  data.totalHospitalBedsValue = totalHospitalBeds.value;
  data.periodTypeValue = periodTypes.value;
  return data;
};
