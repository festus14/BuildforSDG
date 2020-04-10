const periodType = document.querySelectorAll("[data-period-type]");
const timeToElapse = document.querySelector("[data-time-to-elapse]");
const reportedCases = document.querySelector("[data-reported-cases]");
const population = document.querySelector("[data-population]");
const totalHospitalBeds = document.querySelector("[data-total-hospital-beds]");
const submitButton = document.querySelector("[data-go-estimate]");

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
